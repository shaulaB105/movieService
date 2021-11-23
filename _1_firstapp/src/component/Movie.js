import PropTypes from "prop-types";

import {Link} from "react-router-dom";

function Movie({id, title, summary, year, genres, coverImg}){
    return (
        <div>
            <img src={coverImg} alt={`movie cover for ${title}`}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h4>{year}</h4>
            <p>{summary}</p>
            <ul>
                {genres.map((genre, idx)=>{
                    return <li key={idx}>{genre}</li>
                })}
            </ul>
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