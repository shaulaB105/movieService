import {useEffect, useRef} from "react";


export function useClick(init) {
    const elem = useRef();

    useEffect(()=>{
        if(elem.current)
            elem.current.addEventListener("click", init);
        return ()=>{
            if(elem.current)
                elem.current.removeEventListener("click", init);
        }
    }, []);

    if(typeof init !== "function")
        return null;

    return elem;
}