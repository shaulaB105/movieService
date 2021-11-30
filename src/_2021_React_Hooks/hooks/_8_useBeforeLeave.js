import {useEffect} from "react";

export function useBeforeLeave(onBefore){
    const handle = (evt) =>{
        const {clientY} = evt;
        if(0 >= clientY)
            onBefore();
    };
    useEffect(()=>{
        document.addEventListener("mouseleave", handle);
        return ()=>document.removeEventListener("mouseleave", handle);
    },[]);

    if(typeof onBefore !== "function")
        return;


}