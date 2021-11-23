import {useState, useEffect} from "react";

import Movie from "../component/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const data = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
            )
        ).json();
        setMovies(data.data.movies);
        setLoading(false);
    }
    useEffect(()=>{
        getMovies();
    },[]);

    const MovieList = ()=>{
        return (
            <div>
                <h1>Movie List</h1>
                <hr/>
                {movies.map((movie, idx)=>
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        summary={movie.summary}
                        year={movie.year}
                        genres={movie.genres}
                        coverImg={movie.medium_cover_image}
                    />)}
            </div>
        )

    }

    return (
        <div className="App">
            {loading ? "Now Loading..." : <MovieList/>}
        </div>
    );
}
export default Home;