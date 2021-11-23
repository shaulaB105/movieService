import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import MovieDetail from "../component/MovieDetail";

function Detail(){
    const {id} = useParams();

    const [isLoading, setLoading] = useState(true);
    const [movie, setMovie] = useState();

    const getMovie = async ()=>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect( ()=>{
        getMovie();

    }, []);

    return (
        <div>
            {isLoading ? "Loading..." : <MovieDetail movie={movie} />}
        </div>
    )
}
export default Detail;