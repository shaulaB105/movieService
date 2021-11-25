import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie ({id, year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={`${title}'s cover`} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((g, idx)=><li key={idx} className="genres__genre">{g}</li>)}
                </ul>
                <p className="movie__summary">{140 < summary.length ? `${summary.slice(0, 140)}...` : summary}</p>

            </div>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
};

export default Movie;