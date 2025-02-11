import Overview from "components/Dashboard/Overview/Overview";
import classes from "./Dashboard.module.css";
import Devices from "components/Dashboard/Devices/Devices";
import MiningStatus from "components/Dashboard/MiningStatus/Mining";
import LiveMiners from "components/Dashboard/LiveMiners/LiveMiners";

const Dashboard = () => {
  return (
    <main className="container">
      {/* <Overview />
      <Devices />
      <MiningStatus /> */}
      <LiveMiners />
    </main>
  );
};
export default Dashboard;
