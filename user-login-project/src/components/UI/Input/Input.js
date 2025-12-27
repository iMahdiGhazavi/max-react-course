import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(
  ({ id, label, type, value, onChange, onBlur, isValid }, ref) => {
    const inputRef = useRef();

    const focusHandler = () => {
      console.log("the ref: ", inputRef);
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: focusHandler,
      };
    });
    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
