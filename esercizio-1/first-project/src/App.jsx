import DisplayLanguage from "./components/DisplayLanguage"
import LanguageContext from "./components/LanguageContext"
import { useState } from "react"

function App () {

  const [language, setLanguage] = useState ("it")

  function handleLanguageChange (event){
    setLanguage(event.target.value) 
  };

    return (
      <>
      <div>
        <LanguageContext.Provider value={language}>
        <DisplayLanguage />
        </LanguageContext.Provider>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">ENGLISH</option>
          <option value="it">ITALIANO</option>
        </select>
      </div>
      </>
    )
}

export default App