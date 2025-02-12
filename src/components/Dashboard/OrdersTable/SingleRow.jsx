import { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { Button, Text } from "components/common";
import { format, parse } from "date-fns"; // Import format and parse functions
import Dropdown from "components/common/Dropdown/Dropdown";
import clsx from "clsx";

import classes from "./OrdersTable.module.css";

// Define possible actions

const SingleRow = ({ minersId, price, status, createdOn }) => {
  // Format the createdOn date as "14-Aug-2023"
  const formattedDate = createdOn
    ? format(parse(createdOn, "MM/dd/yyyy", new Date()), "dd-MMM-yyyy")
    : "";

  return (
    <>
      <tr>
        <td>
          <Text sm className={classes.item}>
            {minersId}
          </Text>
        </td>
        <td>
          <Text sm className={classes.item}>
            {price}
          </Text>
        </td>
        <td>
          <Text
            sm
            className={clsx(
              classes.item,
              classes.status,
              status.toLowerCase() === "paused" && classes.paused,
              status.toLowerCase() === "pending" && classes.pending
            )}
          >
            {status}
          </Text>
        </td>
        <td>
          <Text sm className={classes.item}>
            {formattedDate}
          </Text>
        </td>

        <td>
          <Button transparent className={classes.button}>
            Contact Support
          </Button>
        </td>
      </tr>
    </>
  );
};

export default SingleRow;
