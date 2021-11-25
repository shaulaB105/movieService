import React from "react";

import axios from "axios";
import Movie from "../component/Movie.js";

import "./Home.css";

class Home extends React.Component{
    state={
        isLoading : true,
        movies : []
    };

    getMovies = async () => {
        const {
            data: {
                data:{
                    movies
                }
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");

        this.setState({movies, isLoading : false});
    }
    componentDidMount() {
        this.getMovies();
    }

    render(){
        const {isLoading, movies} = this.state;

        return (
            <section className="container">
                {isLoading
                    ? (
                        <div className="loader">
                            <span className={"loader__text"}>Loading...</span>
                        </div>
                    ) : (
                        <div className="movies">
                            {
                                movies.map((m, idx)=>{
                                    return <Movie
                                        key={idx}
                                        poster={m.medium_cover_image}
                                        summary={m.summary}
                                        year={m.year}
                                        id={m.id}
                                        title={m.title}
                                        genres={m.genres}
                                    />
                                })
                            }
                        </div>
                    )

                }
            </section>
        )
    }
}
export default Home;