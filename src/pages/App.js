import React from "react";
import { Router } from "@reach/router";

import Header from "../components/header/Header";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";

import { GlobalStyle } from "../components/styles/GlobalStyle";

const App = () => (
	<>
		<Header />
		<Router>
			<Home path="/" />
			<Movie path="/:movieId" />
			<NotFound default />
		</Router>
		<GlobalStyle />
	</>
);

export default App;
