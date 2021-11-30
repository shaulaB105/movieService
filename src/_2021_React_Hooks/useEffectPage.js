import {useState} from "react";
import {BaseEffectTest} from "./hooks/_3_BaseEffect";
import {useTitle} from "./hooks/_4_UseTitle";
import {useClick} from "./hooks/_5_useClick";
import {useConfirm} from "./hooks/_6_useConfirm";
import {usePreventLeave} from "./hooks/_7_usePreventLeave";
import {useBeforeLeave} from "./hooks/_8_useBeforeLeave";
import {useFadeIn} from "./hooks/_9_useFadeIn";
import {useNetwork} from "./hooks/_10_useNetwork";
import {useScroll} from "./hooks/_11_useScroll";
import {useFullscreen} from "./hooks/_12_useFullscreen";
import {useNotification} from "./hooks/_13_useNotification";

function UseEffectPage () {
    const [num, setNum] = useState(0);
    const [num1, setNum1] = useState(0);
    const changeNum = ()=>setNum((prev)=>++prev);
    const changeNum1 = ()=>setNum1((prev)=>++prev);
    BaseEffectTest();
    //
    const titleUpdator = useTitle("Loading....");
    setTimeout(()=>titleUpdator("Home"),5000);
    //
    const sayHello = ()=>console.log("say Hello");
    const clickTest = useClick(sayHello);
    //
    const deleteWorld = ()=>console.log("Delete Successed");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld);
    //
    const {enablePrevent, disablePrevent} = usePreventLeave();
    //
    const bagForLife = ()=>console.log("pls don't leave");
    useBeforeLeave(bagForLife);
    //
    const fadeInTest = useFadeIn(.5);
    //
    const netChanged = (online) =>{
        console.log(online?"we just went online" : "we are offline");
    }
    const netStatus = useNetwork(netChanged);
    //
    const {y} = useScroll();
    //
    const onFull = (isFull) => {
        console.log(isFull ? "We are full" : "We are just");
    }
    const {elem : fullDest, triggerFull, exitFull} = useFullscreen(onFull);
    //
    const testNotif = useNotification("Can I steal your kimchi?", {
        body : "I love kimch, don't you?"
    });
    return (
        <div className="testPage" style={{ height : '1000vh' }}>
            <h1>Hi</h1>
            <button onClick={changeNum}>{num}</button>
            <button onClick={changeNum1}>{num1}</button>
            <hr/>
            <h2>[1] use Title</h2>
            <p>Title will be changing after 5seconds.</p>
            <hr/>
            <h2>[2] use Click</h2>
            <p ref={clickTest}>Hi</p>
            <hr/>
            <h2>[3] use Confirm</h2>
            <button onClick={confirmDelete}>Delete World</button>
            <hr/>
            <h2>[4] use Prevent</h2>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
            <hr/>
            <h2>[5] use BeforeLeave</h2>
            <hr/>
            <h2>[6] use FadeIn</h2>
            <span {...fadeInTest}>Hello</span>
            <hr/>
            <h2>[7] use Network</h2>
            <span>{netStatus ? "Online" : "Offline"}</span>
            <hr/>
            <h2 style={{
                position : "fixed",
                bottom : "10px",
                right : "10px",
                color : y>100 ? "red" : "blue"}}>[8] use Scroll</h2>
            <h2>[9] use Fullscreen</h2>
            <div ref={fullDest}>
                <img src="https://source.unsplash.com/random/480x320"/>
                <br/>
                <button onClick={exitFull}>Exit</button>
            </div>
            <button onClick={triggerFull}>Make Full</button>
            <hr/>
            <h2>[10] use Notification</h2>
            <button onClick={testNotif}>Notification EX.</button>
        </div>
    );
}

export default UseEffectPage;