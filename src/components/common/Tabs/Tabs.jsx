import React, { useState } from "react";
import classes from "./Tabs.module.css";
import clsx from "clsx";

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
  className,
  buySell,
  onClick,
}) => {
  return (
    <div
      className={clsx(classes.tabs, className, buySell && classes.buySell)}
      onClick={onClick ? onClick : null}
    >
      {tabs.map((tab, i) => (
        <button
          className={clsx(
            classes.tab,
            activeTab === tab && classes.activeTab,
            buySell && activeTab.toLowerCase() === "sell" && classes.activeSell
          )}
          key={i}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
