import UseStateBase from "./hooks/_0_BaseHook";
import {useInput} from "./hooks/_1_UseInput";
import {useTabs} from "./hooks/_2_UseTabs";

const tabTest = [
    {
        tab: "Section 1",
        content : "I'm the content of the Section 1"
    },{
        tab: "Section 2",
        content : "I'm the content of the Section 2"
    }
];

function UseStatePage () {

    const maxLen = (v)=> v.length < 10;
    const name = useInput("Mr.", maxLen);
    const {curr, next} = useTabs(0, tabTest);

    return (
        <div className="testPage">
            <UseStateBase />
            <hr/>
            <h1>[1] useInput</h1>
            <input placeholder="Name" {...name}/>
            <hr/>
            <h1>[2] useTab</h1>
            {tabTest.map((tab, idx)=>
                <button key={idx} onClick={()=>next(idx)}>{tab.tab}</button>)}
            <p>{curr.content}</p>
        </div>
    );
}

export default UseStatePage;