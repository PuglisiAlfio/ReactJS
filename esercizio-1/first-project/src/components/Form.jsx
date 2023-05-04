import { useState } from "react";
import Login from "./Login"

const Form = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pass, setPass] = useState("");

  const setNameHandler = (event) => {
    setName({ name: event.target.value });
  };

  const setLastNameHandler = (event) => {
    setLastName({lastName: event.target.value})
  }

  const setPassHandler = (event) => {
    setPass({ pass: event.target.value });
  };

  return (
    <form>
      <input type="text" onChange={setNameHandler} />
      <br />
      <input type="text" onChange={setLastNameHandler} />
      <br />
      <input type="password" onChange={setPassHandler} />
      <br />
      <Login name={name} lastName={lastName} pass={pass} />
    </form>
  );
}

export default Form