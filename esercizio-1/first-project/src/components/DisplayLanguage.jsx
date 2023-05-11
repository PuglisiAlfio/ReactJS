import React from "react";
import LanguageContext  from "./LanguageContext"

const Strings = {
  en:{CURRENT_LANGUAGE: "Selected language: English"},
  it:{CURRENT_LANGUAGE: "Lingua Selezionata: Italiano"}
}

class DisplayLanguage extends React.Component {
    render(){
        return <>
          <LanguageContext.Consumer>
            {language => {
                return<>
                        <div>
                            <h1>
                            {Strings[language].CURRENT_LANGUAGE}
                            </h1>
                        </div>
                     </>
                
              }
            }
          </LanguageContext.Consumer>
          </>
      }
}

export default DisplayLanguage