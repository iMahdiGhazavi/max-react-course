import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import Users from "./components/Users/Users";

const INITIAL_USERS = [
  {
    id: 1,
    username: "Max",
    age: 28,
  },
  {
    id: 2,
    username: "Manuel",
    age: 30,
  },
];

function App() {
  const [users, setUsers] = useState(INITIAL_USERS);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUsers={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;
