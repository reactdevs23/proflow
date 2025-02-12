import React from "react";
import classes from "./MiningStatus.module.css";
import { Heading, Text } from "components/common";
import { numberFormat } from "utils/utils";

const MiningStatus = () => {
  const info = { mined: 49976, plan: 75000, driver: 318, miner: 296 };
  return (
    <div className={classes.container} data-aos="fade-up">
      <div className={classes.header}>
        <div className={classes.mined}>
          <Text base opacity50>
            Mined <sup>mt</sup>
          </Text>
          <Heading lg>{numberFormat(info.mined)}</Heading>
        </div>
        <div className={classes.plan}>
          <Text base opacity50>
            Plan <sup>mt</sup>
          </Text>
          <Heading lg>{numberFormat(info.plan)}</Heading>
        </div>
      </div>

      <div className={classes.engaged}>
        <Text sm opacity50>
          Engaged
        </Text>
        <div className={classes.engagedData}>
          <div className={classes.driver}>
            <span className={classes.count}>{info.driver}</span>
            <span className={classes.role}>Driver</span>
          </div>
          <div className={classes.miner}>
            <span className={classes.count}>{info.miner}</span>
            <span className={classes.role}>Miner</span>
          </div>
        </div>
      </div>

      <div className={classes.loading}>
        <Text medium base>
          Loading &nbsp; <span className={classes.loadingValue}>65%</span>
        </Text>
      </div>
    </div>
  );
};

export default MiningStatus;
