import React from "react";
import DisplayLanguage from "./components/DisplayLanguage";
import LanguageContext from "./components/LanguageContext";

export default class App extends React.Component {
  state = {
    language: "it",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select value={this.state.language} onChange={this.handleLanguageChange}>
          <option value="en">ENGLISH</option>
          <option value="it">ITALIANO</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      
      </div>
    );
  }
}
