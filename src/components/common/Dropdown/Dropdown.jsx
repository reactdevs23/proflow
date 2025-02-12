import { useEffect, useRef } from "react";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import classes from "./Dropdown.module.css";

import useOnClickOutside from "../../../hooks";
import { Text } from "..";

const Dropdown = ({
  children,
  isActive,
  items,
  selectedValue,
  onSelect,
  setIsActive,
  className,
  sm,
  label,
  type2,
}) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div
      className={clsx(
        classes.dropdown,
        classes.noTheme,
        className,
        sm && classes.sm
      )}
      ref={ref}
    >
      {type2 && (
        <div onClick={() => setIsActive((prev) => !prev)}>{children}</div>
      )}
      {!type2 && (
        <>
          <div
            className={clsx(classes.labelContainer)}
            onClick={() => setIsActive((prev) => !prev)}
          >
            <label
              className={clsx(classes.label, isActive && classes.labelActive)}
            >
              {label}
            </label>
            {isActive ? (
              <FaChevronUp className={clsx(classes.arrow, classes.upArrow)} />
            ) : (
              <FaChevronDown className={classes.arrow} />
            )}
          </div>
        </>
      )}
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={clsx(classes.list, "overflow")}>
          {items?.map((item, idx) => {
            return (
              <div key={idx}>
                <Text
                  key={"id-" + idx}
                  className={clsx(
                    classes.listItem,
                    selectedValue === item && classes.active
                  )}
                  onClick={() => {
                    onSelect(item);
                    setIsActive(false);
                  }}
                >
                  {item}
                  {!type2 && selectedValue === item && (
                    <FaCheck className={classes.check} />
                  )}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
