import { useState } from "react";
import Login from "./Login"

const Form = () => {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const autoComplete = (e) => {
    setName({ name: e.target.value });
  };

  const autoComplete2 = (e) => {
    setPass({ pass: e.target.value });
  };

  return (
    <form>
      <input type="text" onChange={autoComplete} />
      <input type="password" onChange={autoComplete2} />
      <Login text={name} pass={pass} />
    </form>
  );
}

export default Form