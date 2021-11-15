import Button from "./Button";

import {useState, useEffect} from "react";

function App() {
    const [showing, setShowing] = useState(false);
    const changeShow = () => setShowing((prev)=>!prev);

    function Hello () {
        useEffect(()=>{
            console.log("created :)");
            return () => console.log("destroyed :(");
        },[]);
        return <h1>Hello</h1>
    }

    return (
        <div className="App">
            {showing ? <Hello /> : null}
            <button onClick={changeShow}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;

/*

lecture 6.1~6.3

    const [cnt, setCnt] = useState(0);
    const onClick = ()=>setCnt((prev)=>++prev);
    console.log("i run all the time");
    const iRunOnlyOnce = ()=> {
        console.log("i run only once");
    }

    const [keyword, setKeyword] = useState("");
    const onChange= (event)=>setKeyword(event.target.value);

    useEffect(iRunOnlyOnce, []);

    useEffect(()=>{
        console.log("Search For", keyword)
    }, [keyword]);


    useEffect(()=>{
        console.log("Button clicks", cnt)
    }, [cnt]);


        return (
                <h1>Welcome back!</h1>
            <Button text={"text"}  />
            <input type="text"
                   placeholder="Search here...."
                   value={keyword}
                   onChange={onChange}
            />
            <h2>Count : {cnt}</h2>
            <button onClick={onClick}>click me</button>
                );

* */
