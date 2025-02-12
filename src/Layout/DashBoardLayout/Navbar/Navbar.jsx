import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { logo } from "images";
import { Button } from "components/common";
import { FiSettings } from "react-icons/fi";
import clsx from "clsx";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";

const Navbar = ({ setShowChangePasswordModal }) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className={classes.wrapper}>
      <nav className={clsx(classes.navbar, "container")}>
        <Link to="/">
          <img src={logo} alt="Proflow" className={classes.logo} />
        </Link>
        <div
          className={clsx(classes.buttonContainer, sidebar && classes.sidebar)}
        >
          <Button
            radiusSm
            className={classes.button}
            onClick={() => setShowChangePasswordModal(true)}
          >
            Change Password
          </Button>
          <Button transparent className={classes.settingButton}>
            <FiSettings className={classes.settingIcon} />
          </Button>
        </div>{" "}
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
      </nav>
    </div>
  );
};
export default Navbar;
