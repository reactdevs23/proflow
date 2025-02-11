import Overview from "components/Dashboard/Overview/Overview";
import classes from "./Dashboard.module.css";
import Devices from "components/Dashboard/Devices/Devices";
import MiningStatus from "components/Dashboard/MiningStatus/Mining";

const Dashboard = () => {
  return (
    <main className="container">
      <Overview />
      <Devices />
      <MiningStatus />
    </main>
  );
};
export default Dashboard;
