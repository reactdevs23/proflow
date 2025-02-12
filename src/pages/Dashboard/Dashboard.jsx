import Overview from "components/Dashboard/Overview/Overview";
import classes from "./Dashboard.module.css";
import Devices from "components/Dashboard/Devices/Devices";
import MiningStatus from "components/Dashboard/MiningStatus/Mining";
import LiveMiners from "components/Dashboard/LiveMiners/LiveMiners";
import { useState } from "react";
import { Input, Tabs } from "components/common";
import OrdersTable from "components/Dashboard/OrdersTable/OrdersTable";
import clsx from "clsx";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Live Miners");
  const [searchValue, setSearchValue] = useState("");
  return (
    <main className={clsx("container", classes.container)}>
      <div className={classes.infoContainer}>
        <Overview />
        <Devices />
        <MiningStatus />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <Tabs
            tabs={["Live Miners", "Orders"]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onClick={() => setSearchValue("")}
          />
          <Input
            className={classes.input}
            search
            value={searchValue}
            setValue={setSearchValue}
            placeholder="Search"
          />
        </div>
        {activeTab === "Live Miners" && (
          <LiveMiners
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        )}{" "}
        {activeTab === "Orders" && (
          <OrdersTable
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        )}
      </div>
    </main>
  );
};
export default Dashboard;
