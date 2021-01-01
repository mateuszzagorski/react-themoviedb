import React from "react";
import PropTypes from "prop-types";

import NoImage from "../../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import MovieThumb from "../movie_thumb/MovieThumb";

import { StyledMovieInfo } from "./StyledMovieInfo";
import Movie from "../../pages/Movie";

const MovieInfo = ({ movie, genres }) => {
	return (
		<StyledMovieInfo backdrop={movie.backdrop_path}>
			<div className="movieinfo-content">
				<div className="movieinfo-thumb">
					<MovieThumb
						image={
							movie.poster_path
								? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
								: NoImage
						}
						clickable={false}
					/>
				</div>
				<div className="movieinfo-text">
					<h1>{movie.title}</h1>
					<h2 className="genres">GENRES:</h2>
					{/* <p className="genres"> */}
					{genres.map((genreName, index) => {
						return index + 1 === genres.length ? (
							<p key={index} className="genres genres-last">
								{genreName}
							</p>
						) : (
							<p key={index} className="genres">
								{genreName},{" "}
							</p>
						);
					})}
					{/* </p> */}
					<h3>PLOT</h3>
					<p>{movie.overview}</p>
					<div className="rating-director">
						<div>
							<h3>IMDB RATING</h3>
							<div className="score">{movie.vote_average}</div>
						</div>
						<div className="director">
							<h3>
								DIRECTOR
								{movie.directors[0].length > 1 ? "S" : ""}
							</h3>
							{movie.directors.map((element) => (
								<p key={element.credit_id}>{element.name}</p>
							))}
						</div>
						<div className="release-date">
							<h3>RELEASE DATE</h3>
							<p>{movie.release_date}</p>
						</div>
						<div className="movie-homepage">
							<h3>MOVIE HOMEPAGE</h3>
							<a href={movie.homepage} target="_blank">
								See movie page
							</a>
						</div>
					</div>
				</div>
			</div>
		</StyledMovieInfo>
	);
};

MovieInfo.propTypes = {
	movie: PropTypes.object,
	directors: PropTypes.array,
};

export default MovieInfo;
