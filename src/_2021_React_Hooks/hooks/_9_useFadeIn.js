import {useEffect, useRef} from "react";

export function useFadeIn (duration= 1, delay = 0) {
    const elem = useRef();

    useEffect(()=>{
        if(elem.current){
            const {current} = elem;
            current.style.transition = `opacity ${duration} ${delay}`;
            current.style.opacity = 1;
        }
    }, []);

    if(typeof duration !== "number"
    || typeof delay !== "number")
        return;

    return {ref : elem,
        style : {
            opacity : 0
        }};
}