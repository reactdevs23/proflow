import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

import clsx from "clsx";
import { logo } from "images";
import { Button } from "components/common";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { navItem: "Features", to: "/features" },
    { navItem: "About", to: "/about" },
    { navItem: "Pricing ", to: "/pricing" },
    { navItem: "Changelog", to: "/changelog" },
    { navItem: "Contact", to: "/contact" },
  ];

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={[
        classes.wrapper,
        (isScrolled || sidebar) && classes.wrapperBg,
      ].join(" ")}
    >
      <header className={clsx(classes.header, "container")}>
        <NavLink
          className={[classes.navItem, classes.logoContainer].join(" ")}
          to="/"
          onClick={() => setSidebar((prev) => !prev)}
        >
          {" "}
          <img src={logo} alt="Proflow" className={classes.logo} />
        </NavLink>

        <nav
          className={[classes.navItems, sidebar && classes.sidebar].join(" ")}
        >
          {" "}
          {navItems.map(({ navItem, to }, i) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                isActive
                  ? clsx(classes.navItem, classes.navActive)
                  : classes.navItem
              }
              to={to}
              onClick={() => setSidebar((prev) => !prev)}
            >
              {navItem}
            </NavLink>
          ))}
          <Button glow base to="sign-up">
            Sign Up for Free
          </Button>
        </nav>
        <div className={classes.mobileButton}>
          {sidebar ? (
            <IoMdClose
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          ) : (
            <AiOutlineAlignRight
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
