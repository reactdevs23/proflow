import { Button, Heading, Text } from "components/common";
import classes from "./Devices.module.css";
import { devicesIcon } from "images";

import Chart from "./Chart/Chart";
import { MdChevronRight } from "react-icons/md";
const Devices = () => {
  const devices = [
    { name: "Desktop", value: 52.6 },
    { name: "Tablet", value: 16.4 },
    { name: "Mobile", value: 31.0 },
  ];
  return (
    <div className={classes.container} data-aos="fade-up">
      <div className={classes.header}>
        <Heading medium lg>
          Devices
        </Heading>
        <div className={classes.iconContainer}>
          <img src={devicesIcon} alt="#" className={classes.icon} />
        </div>
      </div>{" "}
      <Chart data={devices} />
      <div className={classes.bottom}>
        <Text sm opacity50>
          {devices?.length} Active Device
        </Text>
        <Button transparent className={classes.button}>
          View Details
          <MdChevronRight />
        </Button>
      </div>
    </div>
  );
};
export default Devices;
