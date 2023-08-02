import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const AddUser = ({ onAddUsers }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    onAddUsers({
      id: Math.random().toString(),
      username: username,
      age: age,
    });
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={styles["add-user"]}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={username}
        />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={age} />
        <div className={styles["button-container"]}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
