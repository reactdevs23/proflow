import { Route, Routes } from "react-router-dom";
import MainLayout from "Layout/MainLayout/MainLayout";
import Home from "pages/Home/Home";
import Login from "pages/Authentication/Login/Login";
import Signup from "pages/Authentication/Signup/Signup";
import Dashboard from "pages/Dashboard/Dashboard";
import DashBoardLayout from "Layout/DashBoardLayout/DashBoardLayout";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({
      // Global settings:
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      // Animation settings:
      offset: 300,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
      </Route>
      <Route path="/" element={<DashBoardLayout />}>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
