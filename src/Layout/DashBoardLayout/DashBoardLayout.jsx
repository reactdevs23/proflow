import { Outlet } from "react-router-dom";
import classes from "./DashBoardLayout";
import Footer from "Layout/Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import ChangePassword from "components/Authentication/ForgotPassword/ForgotPassword/ForgotPassword";

const DashBoardLayout = () => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  return (
    <main>
      <Navbar setShowChangePasswordModal={setShowChangePasswordModal} />
      <Outlet />
      <ChangePassword
        isActive={showChangePasswordModal}
        onClose={() => setShowChangePasswordModal(false)}
      />
    </main>
  );
};
export default DashBoardLayout;
