import React from "react";
import styles from "./Users.module.css";
import User from "../User/User";

const Users = ({ users }) => {
  return (
    <div className={styles["all-users"]}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <User username={user.username} age={user.age} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
