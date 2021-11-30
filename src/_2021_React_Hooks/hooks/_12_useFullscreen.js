import {useRef} from "react";

export function useFullscreen(onFull) {
    const elem = useRef();

    const runCb = (isFull) =>{
        if(onFull && typeof onFull === "function")
            onFull(isFull);
    }

    const triggerFull = () =>{
        if(elem.current){
            if(elem.current.requestFullscreen)
                elem.current.requestFullscreen();
            else if(elem.current.mozRequestFullscreen)
                elem.current.mozRequestFullscreen();
            else if(elem.current.webkitRequestFullscreen)
                elem.current.webkitRequestFullscreen();
            else if(elem.current.msRequestFullscreen)
                elem.current.msRequestFullscreen();

            runCb(true);
        }

    }
    const exitFull = () =>{
        document.exitFullscreen();
        runCb(false);
    }
    return {elem, triggerFull, exitFull};
}