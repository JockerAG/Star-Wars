import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Sections } from "./views/Sections.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planets } from "./views/Planets.jsx";
import { Characters } from "./views/Characters.jsx";
import { Films } from "./views/Films.jsx";
import {Species} from "./views/Species.jsx"
import {Vehicles} from "./views/Vehicles.jsx"
import {Starships} from "./views/Starships.jsx"
import { CharactersDetails } from "./views/CharactersDetails.jsx";
import { PlanetDetails } from "./views/PlanetDetails.jsx";
import { SpeciesDetails } from "./views/SpeciesDetails.jsx";
import { VhcDetails } from "./views/VhcDetails.jsx";
import { StarshipsDetails } from "./views/StarshipsDetails.jsx";
import { FilmsDetails } from "./views/FilmsDetails.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Sections/>} />
						<Route path="/planets" element={<Planets/>} />
						<Route path="/characters" element={<Characters/>} />
						<Route path="/films" element={<Films/>} />
						<Route path="/species" element={<Species />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/characters-details/:id" element={<CharactersDetails />} />
						<Route path="/film-details/:id" element={<FilmsDetails />} />
						<Route path="/planet-details/:id" element={<PlanetDetails/>} />
						<Route path="/specie-details/:id" element={<SpeciesDetails/>} />
						<Route path="/vehicle-details/:id" element={<VhcDetails/>} />
						<Route path="/starship-details/:id" element={<StarshipsDetails/>} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
