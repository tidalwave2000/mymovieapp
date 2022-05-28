import React from "react";

const MovieList = (props) => {
	const FavoriteComponent = props.favoriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className="image-container d-flex justify-content-evenly">
					{/* Display Movie poster of query */}
					<img className="img-fluid " src={movie.Poster} alt="movie"></img>
					<div
						onClick={() => props.handleFavoritesClick(movie)}
            className="overlay d-flex align-items-start justify-content-evenly">
						<FavoriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
