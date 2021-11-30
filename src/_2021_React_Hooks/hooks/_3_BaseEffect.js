import {useEffect} from "react";


export function BaseEffectTest () {
    const sayHello = ()=>console.log("hello");

    useEffect(()=>{
        sayHello();
    }, [0]);

}