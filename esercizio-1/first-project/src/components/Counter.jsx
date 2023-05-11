import { useState } from "react"
import ClickCounter from "./SideEffect";


function Counter() {

    const [counter, setCount] = useState(0);

    const increase = () => {
        setCount(count => count + 1)
    }

    const decrease = () => {
        if (counter > 0) {
            setCount(count => count - 1);
        }
      };

   function onCounterChange() {
    console.log(`Il contatore è ${counter}`)
    }

        return  <ClickCounter increase={increase} decrease={decrease} counter={counter} change={onCounterChange({counter})}/>
    
}

export default Counter