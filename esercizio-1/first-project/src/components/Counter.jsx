import { useState } from "react"
import SideEffect from "./SideEffect";


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

        return  <SideEffect increase={increase} decrease={decrease} counter={counter} change={onCounterChange({counter})}/>
    
}

export default Counter