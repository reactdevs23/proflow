import { Route, Routes } from "react-router-dom";
import MainLayout from "Layout/MainLayout";
import Home from "pages/Home/Home";
import Login from "pages/Authentication/Login/Login";
import Signup from "pages/Authentication/Signup/Signup";
import Dashboard from "pages/Dashboard/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
      </Route> */}
    </Routes>
  );
}

export default App;
