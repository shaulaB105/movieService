import React from "react";
import PropTypes from "prop-types";

function Movie ({id, year, title, summary, poster}) {
    return (
        <div>
            <img src={poster} alt={`${title}'s cover`}/>
            <h4>{title}</h4>
            <span>{year}</span>
            <p>{summary}</p>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
};

export default Movie;