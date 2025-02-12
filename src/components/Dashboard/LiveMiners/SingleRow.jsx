import { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { Text } from "components/common";
import { format, parse } from "date-fns"; // Import format and parse functions
import Dropdown from "components/common/Dropdown/Dropdown";
import clsx from "clsx";

import classes from "./LiveMiners.module.css";

// Define possible actions
const actionsName = ["View", "Paused", "Stop", "Delete"];

const SingleRow = ({ img, type, coinsPerMin, status, createdOn }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [actionName, setActionName] = useState("");

  // Format the createdOn date as "14-Aug-2023"
  const formattedDate = createdOn
    ? format(parse(createdOn, "MM/dd/yyyy", new Date()), "dd-MMM-yyyy")
    : "";

  return (
    <>
      <tr>
        <td>
          <div className={classes.itemContainer}>
            <img src={img} alt="#" className={classes.img} />
            <Text sm className={classes.item}>
              {type}
            </Text>
          </div>
        </td>
        <td>
          <Text sm className={classes.item}>
            {coinsPerMin}
          </Text>
        </td>
        <td>
          <Text
            sm
            className={clsx(
              classes.item,
              classes.status,
              status.toLowerCase() === "active" && classes.active,
              status.toLowerCase() === "completed" && classes.completed
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
          <Dropdown
            className={classes.actionDropdown}
            type2
            items={actionsName}
            isActive={showDropdown}
            setIsActive={setShowDropdown}
            selectedValue={actionName}
            onSelect={(val) => setActionName(val)}
          >
            <IoMdMore className={classes.moreButton} />
          </Dropdown>
        </td>
      </tr>
    </>
  );
};

export default SingleRow;
