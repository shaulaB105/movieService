import {useState} from "react";

function UseStateBase () {

    const [item, setItem] = useState(1);

    const incrementItem = () => setItem((prev)=>prev+1);
    const decrementItem = () => setItem((prev)=>prev-1);

    return (
        <div>
            <h2>[0] UseState Base 1.0</h2>
            <h3>Hello {item}</h3>
            <h4>Start editing to see some magic happen!</h4>
            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Decrement</button>
        </div>
    );
}

export default UseStateBase;