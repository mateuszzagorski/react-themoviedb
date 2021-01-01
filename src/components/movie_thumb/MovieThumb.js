import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

import { StyledMovieThumb } from "./StyledMovieThumb";

const MovieThumb = ({ image, movieId, clickable, genres }) => (
	<StyledMovieThumb>
		{clickable ? (
			<Link
				to={`/${movieId}`}
				state={{
					genres: genres.genres,
				}}
			>
				<img className="clickable" src={image} alt="moviethumb" />
			</Link>
		) : (
			<img src={image} alt="moviethumb" />
		)}
	</StyledMovieThumb>
);

MovieThumb.propTypes = {
	image: PropTypes.string,
	movieId: PropTypes.number,
	clickable: PropTypes.bool,
	genres: PropTypes.object,
};

export default MovieThumb;
