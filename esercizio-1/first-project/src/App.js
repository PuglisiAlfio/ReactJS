import React from "react";
import TodoList from "./components/TodoList"

export default class App extends React.Component {
  renderArr = (arr, remove) => {
    return arr.map((item, index) => {
      return(
        <>
            <li index={index}>{item}</li>
          <button onClick={() => remove(index)}>remove this</button>
        </>
      )
    })
  }

  render(){
    return (
      <>
      <TodoList renderArr = {this.renderArr} />
      </>
    )
  }
}