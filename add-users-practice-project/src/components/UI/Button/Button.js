import React from "react";
import styles from "./Button.module.css";
const Button = () => {
  return (
    <div className={styles.button}>
      <button type="submit">Add User</button>
    </div>
  );
};

export default Button;
