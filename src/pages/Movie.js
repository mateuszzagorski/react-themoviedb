import React from "react";

//Components
import Navigation from "../components/navigation/Navigation";
import MovieInfo from "../components/movie_info/MovieInfo";
import MovieInfoBar from "../components/movie_info_bar/MovieInfoBar";
import Actor from "../components/actor/Actor";
import Grid from "../components/grid/Grid";
import Spinner from "../components/spinner/Spinner";

import { useMovieFetch } from "../components/hooks/useMovieFetch";
import { genresArray } from "../helpers";

const Movie = ({ movieId, location }) => {
	const [movie, loading, error] = useMovieFetch(movieId);

	console.log("movie ", movie);

	if (error) return <div>Something went wrong ...</div>;
	if (loading) return <Spinner />;

	const filmGenreNames = genresArray(location.state.genres, movie.genres);

	return (
		<div>
			<Navigation movieName={movie.original_title} />
			<MovieInfo movie={movie} genres={filmGenreNames} />
			<MovieInfoBar
				time={movie.runtime}
				budget={movie.budget}
				revenue={movie.revenue}
			/>
			<Grid header="Actors">
				{movie.actors.map((actor) => (
					<Actor key={actor.credit_id} actor={actor} />
				))}
			</Grid>
		</div>
	);
};

export default Movie;
