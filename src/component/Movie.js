import PropTypes from "prop-types";

import {Link} from "react-router-dom";

import "./Movie.css";

function Movie({id, title, summary, year, genres, coverImg}){
    return (
        <div className="movie">
            <img src={coverImg} alt={`movie cover for ${title}`}/>
            <div className="movie__info">
                <h2 className="movie__title">
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h4 className="movie__year">{year}</h4>
                <ul className="movie__genres">
                    {genres.map((genre, idx)=>{
                        return <li key={idx} className="movie__genre">{genre}</li>
                    })}
                </ul>
                <p className="movie_summary">{125 < summary.length ? `${summary.slice(0,125)}...` : summary}</p>
            </div>

        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;