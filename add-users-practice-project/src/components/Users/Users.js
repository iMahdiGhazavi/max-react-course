import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";
import Card from "../UI/Card/Card";

const Users = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <User username={user.username} age={user.age} />
            {/* {user.username} ({user.age} years old) */}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Users;
