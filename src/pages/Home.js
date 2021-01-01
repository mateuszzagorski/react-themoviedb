import React, { useState, useEffect } from "react";
import {
	POSTER_SIZE,
	BACKDROP_SIZE,
	IMAGE_BASE_URL,
	SEARCH_BASE_URL,
	POPULAR_BASE_URL,
} from "../config";

// import Components
import HeroImage from "../components/hero_image/HeroImage";
import SearchBar from "../components/search_bar/SearchBar";
import Grid from "../components/grid/Grid";
import MovieThumb from "../components/movie_thumb/MovieThumb";
import LoadMoreBtn from "../components/load_more_btn/LoadMoreBtn";
import Spinner from "../components/spinner/Spinner";

// Custom Hook
import { useHomeFetch } from "../components/hooks/useHomeFetch";
import { useGenreFetch } from "../components/hooks/useGenreFetch";

import NoImage from "../images/no_image.jpg";

const Home = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [
		{
			state: { movies, currentPage, totalPages, heroImage },
			loading,
			error,
		},
		fetchMovies,
	] = useHomeFetch(searchTerm);
	const [genres] = useGenreFetch();

	const searchMovies = (search) => {
		const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

		setSearchTerm(search);
		fetchMovies(endpoint);
	};

	const loadMoreMovies = () => {
		const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${
			currentPage + 1
		}`;
		const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

		const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

		fetchMovies(endpoint);
	};

	if (error) return <div>Something went wrong ...</div>;
	if (!movies[0]) return <Spinner />;

	return (
		<>
			{!searchTerm && (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
					title={heroImage.original_title}
					text={heroImage.overview}
				/>
			)}
			<SearchBar callback={searchMovies} />
			<Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
				{movies.map((movie) => (
					<MovieThumb
						key={movie.id}
						clickable
						image={
							movie.poster_path
								? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
								: NoImage
						}
						genres={genres}
						movieId={movie.id}
						movieName={movie.original_title}
					/>
				))}
			</Grid>
			{loading && <Spinner />}
			{currentPage < totalPages && !loading && (
				<LoadMoreBtn text="Load More" callback={loadMoreMovies} />
			)}
		</>
	);
};

export default Home;
