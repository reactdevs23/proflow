import React, { forwardRef, useState, useRef } from "react";
import classes from "./DatePicker.module.css";
import DatePicker from "react-datepicker";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import Text from "../Text/Text";
import clsx from "clsx";

const CustomInput = forwardRef(
  ({ value, onClick, onChange, label, isActive, inputRef }, ref) => {
    return (
      <div className={classes.customInput} onClick={onClick} ref={ref}>
        <input
          ref={inputRef} // Use the inputRef here
          className={classes.inputField}
          value={value}
          onChange={onChange}
          placeholder={label}
          id="input"
          readOnly // Prevent manual typing in the date input
        />
        <Text
          sm
          primitive400
          className={classes.label}
          onClick={(e) => {
            e.stopPropagation(); // Prevent event bubbling
            inputRef.current?.click(); // Simulate input click
          }}
        >
          <label htmlFor="input" className={isActive ? classes.active : ""}>
            {label}
          </label>
        </Text>
        {isActive ? (
          <FaChevronUp className={clsx(classes.arrow, classes.upArrow)} />
        ) : (
          <FaChevronDown className={classes.arrow} />
        )}
      </div>
    );
  }
);

const Calender = ({ value, setValue, label }) => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null); // Reference to input field

  return (
    <div className={classes.wrapper}>
      <DatePicker
        selected={value}
        onChange={(date) => setValue(date)}
        dateFormat="MM/dd/yyyy"
        maxDate={new Date()}
        customInput={
          <CustomInput label={label} isActive={isActive} inputRef={inputRef} />
        }
        showPopperArrow={false}
        onCalendarOpen={() => setIsActive(true)}
        onCalendarClose={() => setIsActive(false)}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={classes.header}>
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              className={classes.navButton}
            >
              {"<"}
            </button>
            <select
              className={classes.select}
              value={date.getFullYear()}
              onChange={({ target: { value } }) => changeYear(Number(value))}
            >
              {Array.from({ length: 50 }, (_, i) => (
                <option
                  className={classes.option}
                  key={i}
                  value={new Date().getFullYear() - i}
                >
                  {new Date().getFullYear() - i}
                </option>
              ))}
            </select>
            <select
              className={classes.select}
              value={date.getMonth()}
              onChange={({ target: { value } }) => changeMonth(Number(value))}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option className={classes.option} key={i} value={i}>
                  {new Date(0, i).toLocaleString("default", { month: "long" })}
                </option>
              ))}
            </select>
            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              className={classes.navButton}
            >
              {">"}
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default Calender;
