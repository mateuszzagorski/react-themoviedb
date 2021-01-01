// Convert time to hours and minutes
export const calcTime = (time) => {
	const hours = Math.floor(time / 60);
	const mins = time % 60;
	return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money) => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
	});
	return formatter.format(money);
};
// Return the genres array
export const genresArray = (genres, filmGenreIds) => {
	let genresArr = [];
	let filmGenreIdsArr = [];
	let filmGenreNames = [];

	genres.genres.map((genre) => {
		genresArr.push(genre.id);
	});

	filmGenreIds.map((genreId) => {
		filmGenreIdsArr.push(genreId.id);
	});

	genresArr.filter((item) => {
		if (filmGenreIdsArr.includes(item)) {
			filmGenreNames.push(genres.genres[genresArr.indexOf(item)].name);
		}
	});
	return filmGenreNames;
};
