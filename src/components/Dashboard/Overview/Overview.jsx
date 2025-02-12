import { Button, Heading, Text } from "components/common";
import classes from "./Overview.module.css";
import { overviewIcon } from "images";
import { FaArrowUp } from "react-icons/fa6";
import clsx from "clsx";
import { splitNumberParts } from "utils/utils";
const Overview = () => {
  const info = {
    miners: 12,
    cryptoAssests: 14,
    currentBalance: {
      amount: 35600.49,
      currency: "USDT",
    },
    growth: 6.5,
  };
  const amount = splitNumberParts(info.currentBalance.amount);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Heading medium lg>
          Overview
        </Heading>
        <button className={classes.iconContainer}>
          <img src={overviewIcon} alt="#" className={classes.icon} />
        </button>
      </div>

      <div className={classes.infoContainer}>
        <div className={classes.box}>
          <Heading xl>{info.miners}</Heading>
          <Text base opacity50>
            Miners
          </Text>
        </div>
        <div className={classes.box}>
          <Heading xl>{info.cryptoAssests}</Heading>
          <Text base opacity50>
            Crypto Assets
          </Text>
        </div>{" "}
        <div className={clsx(classes.box, classes.balanceContainer)}>
          <Heading xl>
            {amount.integer.toLocaleString()}.
            <span className={classes.decimalPart}> {amount.decimal}</span>
          </Heading>
          <Text base opacity50>
            Current balance
          </Text>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.box}>
          <Heading base>
            {Number(info.currentBalance.amount).toLocaleString()}
          </Heading>
          <div className={classes.growthContainer}>
            <Text base opacity50>
              {info.currentBalance.currency}
            </Text>
            <Text className={classes.growth} base>
              {6.5}% <FaArrowUp className={classes.arrow} />
            </Text>
          </div>
        </div>
        <Button radiusSm className={classes.button}>
          Create New Miner
        </Button>
      </div>
    </div>
  );
};
export default Overview;
