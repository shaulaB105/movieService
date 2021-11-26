import {useState, useEffect} from "react";

import Movie from "../component/Movie";

import "./Home.css";

function Home() {
    const [isLoading, setLoading] = useState(true);
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
            <div className="movies">
            {
                movies.map((movie, idx)=>
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        summary={movie.summary}
                        year={movie.year}
                        genres={movie.genres}
                        coverImg={movie.medium_cover_image}
                    />
                )
            }
            </div>
        )
    }

    return (
        <div className="container">
            {isLoading ? (
                <div className="loader">
                    Now Loading...
                </div>
            ) : <MovieList/>}
        </div>
    );
}
export default Home;