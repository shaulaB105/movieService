import defaultAxios from "axios";
import {useEffect, useState} from "react";

function useAx(opt, axiosInstance=defaultAxios){
    const [state, setState] = useState({
        loading : true,
        error : null,
        data : null
    });
    const [trigger, setTrigger] = useState(0);
    const reFetchRun = () => {
        setState({
            ...state,
            loading : true
        });
        setTrigger(Date.now());
    }

    useEffect(()=>{
        if(!opt.url)
            return;

        axiosInstance(opt).then((res)=>{
            setState({
                ...state,
                loading : false,
                data : res
            })
        }).catch((error)=>{
            setState({
                ...state,
                loading : false,
                error
            })
        })
    }, [trigger]);

    return {...state, reFetchRun};
}

function UseAxios () {
    const {loading, error, data, reFetchRun} = useAx({
        url : "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    });

    return (
        <div>
            <h1>{data && data.status}</h1>
            <div>{loading ? "Loading..." : "Done"}</div>
            <button onClick={reFetchRun}>ReFetch</button>
            <div>{typeof data}</div>

        </div>
    );
}

export default UseAxios;