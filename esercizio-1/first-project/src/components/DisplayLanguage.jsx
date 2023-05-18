import { useContext } from "react";
import LanguageContext from "./LanguageContext"


function DisplayLanguage () {
  const language = useContext(LanguageContext)

  const Language = {
    it : {
      "HELLO": "Ciao!",
      "CURRENT": "La lingua selezionata è:"
    },
    en: {
      "HELLO": "Hello!",
      "CURRENT": "Selected language is:"
    }
  }

  return (
  <>
  <h3>{Language[language]["HELLO"]}</h3>
  <p>{Language[language]["CURRENT"]}</p>
  </>
  )
}

export default DisplayLanguage