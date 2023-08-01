import React from "react";
import styles from "./User.module.css";

const User = ({ username, age }) => {
  return (
    <div className={styles.item}>
      {username} ({age} years old)
    </div>
  );
};

export default User;
