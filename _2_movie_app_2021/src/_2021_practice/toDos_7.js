import {useState} from "react";

function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onInputChange = (evt) => setTodo(evt.target.value);
    const onSubmit = (evt) => {
        evt.preventDefault();
        if("" === toDo)
            return;

        setTodo("");
        setTodos((prev) => [...prev, toDo]);
    }

    return (
        <div className="App">
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input type = "text"
                       placeholder="Write your to do..."
                       value={toDo}
                       onChange={onInputChange}
                />
                <button type="submit">Add To Do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((val, idx)=>{
                    return <li key={idx}>{val}</li>
                })}
            </ul>

        </div>
    );
}

export default App;

/*

lecture 6.1~6.3
import Button from "./Button";



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

/* 6.4~
* function App() {
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
*
* */