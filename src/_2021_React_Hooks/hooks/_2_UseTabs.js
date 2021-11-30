import {useState} from "react";

export function useTabs(init, all) {
    const [tabIdx, setTabIdx] = useState(init);

    if(!all || !Array.isArray(all))
        return;
    return {
        curr : all[tabIdx],
        next : setTabIdx
    };
}