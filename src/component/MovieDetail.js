import PropTypes from "prop-types";

import {Link} from "react-router-dom";

function MovieDetail ({movie}) {
    return (
        <div>
            <img src={movie.medium_cover_image} alt="movie cover"/>
            <h2>{movie.title_long}</h2>
            <hr/>
            <div>
                <span>✨ {movie.rating}</span>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <span>❤ {movie.like_count}</span>
            </div>
            <div>
                <span>Language : {movie.language}</span><br/>
                <span>Runtime : {movie.runtime}</span><br/>
                <span>Download : {movie.download_count}</span>
            </div>
            <hr/>
            <p>{movie.description_full}</p>
            <ul>
                {movie.genres.map((g, idx)=>{
                    return <li key={idx}>{g}</li>;
                })}
            </ul>
            <hr/>
            <Link to={"/"}>Go to Home</Link>
        </div>
    );
}

MovieDetail.propTypes = {
    movie : PropTypes.object.isRequired
};

export default MovieDetail;