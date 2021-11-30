import {useState} from "react";

export function useInput(init, validateor) {
    const [value, setValue] = useState(init);
    const onChange = (evt) => {
        const {
            target : {value}
        } = evt;

        let willUpdate = true;
        if(typeof validateor === "function")
            willUpdate = validateor(value);

        if(willUpdate){
            setValue(value);
        }
    }
    return {value, onChange};
}