import { useState, useEffect } from "react";
import { GENRE_BASE_URL } from "../../config";

export const useGenreFetch = () => {
	const [genres, setGenres] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchGenres = async (endpoint) => {
		setError(false);
		setLoading(true);

		try {
			const genres = await (await fetch(endpoint)).json();
			setGenres(genres);
		} catch (error) {
			setError(true);
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		//If sessionStorage does exist it will be used
		fetchGenres(GENRE_BASE_URL);
	}, []);

	return [{ genres }, fetchGenres];
};
