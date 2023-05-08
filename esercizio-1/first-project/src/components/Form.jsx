import { useState } from "react";
import { useRef } from "react";
import Login from "./Login"

const Form = () => {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [check, setCheck] = useState(false)
  const setNameHandler = (event) => {
    setName({ name: event.target.value });
  };

  const setPassHandler = (event) => {
    setPass({ pass: event.target.value });
  };

  const setCheckHandler = (event) => {
    setCheck({ check: event.target.checked})
  }

  const emptyName = useRef('');
  const emptyPass = useRef('');
  const emptyCheck = useRef(false);

  return (
    <form>
      <input type="text" onChange={setNameHandler}  ref = {emptyName}/>
      <br />
      <input type="password" onChange={setPassHandler} ref = {emptyPass}/>
      <br />
      <input type="checkbox" onChange={setCheckHandler} ref = {emptyCheck} />
      <Login name={name} pass={pass} check={check} emptyName={emptyName} emptyPass = {emptyPass} emptyCheck={emptyCheck}/>
    </form>
  );
}

export default Form