import React, {useState} from 'react';

 const ClickTarget = () => {
    const [clickTarget, setClickTarget] = useState();

        const click = (event) => {
            setClickTarget(event.target.textContent);
        }

        return <>
            <button onClick={click}>First Button</button>
            <button onClick={click}>Second Button</button>
            <button onClick={click}>Third Button</button>
            <h1>Last Button Clicked: {clickTarget}</h1>
        </>
}

export default ClickTarget;