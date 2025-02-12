import { Link, NavLink } from "react-router-dom";
import classes from "./Footer.module.css";
import { logo } from "images";
import clsx from "clsx";
import CopyRightContainer from "Layout/CopyRightContainer/CopyRightContainer";

const Footer = () => {
  const navItems = [
    { navItem: "Features", to: "/features" },
    { navItem: "About", to: "/about" },
    { navItem: "Pricing ", to: "/pricing" },
    { navItem: "Changelog", to: "/changelog" },
    { navItem: "Contact", to: "/contact" },
  ];

  return (
    <section className={clsx(classes.container, "container")}>
      <footer className={clsx(classes.footer)}>
        <Link to="/">
          <img src={logo} alt="Proflow" className={classes.logo} />
        </Link>

        <nav className={[classes.navItems].join(" ")}>
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
            >
              {navItem}
            </NavLink>
          ))}
        </nav>
      </footer>
      <CopyRightContainer />
    </section>
  );
};
export default Footer;
