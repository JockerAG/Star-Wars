const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [{title: "FIRST", background: "white", initial: "white"}, {title: "SECOND", background: "white", initial: "white"}],
			title: "Star Wars",
			characters: [],
			films:[],
			characterDetails:{},
			section:[],
			planets:[],
			species:[],
			vehicles:[],
			starships:[],
			favorites:[],
			planetDetails:[],
			specieDetails:[],
			vehicleDetails:[],
			starshipDetails:[]
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorites:(newFavorite) => {
				setStore({ favorites: [...getStore().favorites, newFavorite]})
			},

			deleteFav: (item, array) => {
				setStore({favorites: array.filter((element) => element != item)})
			},

			getSections: async () => {
				const url = "https://www.swapi.tech/api/";
				const options = {
					method:"GET",
					
					
				};

				const response = await fetch(url, options);
				if (response.ok) {
					console.log("Aqui están las peliculas");
				} else {
					console.error("Error al traer los personajes")
				}
				const data = await response.json()
				console.log(data);
				setStore( { sections: data} )
			},
			getCharacters: async () => {
				const url = "https://www.swapi.tech/api/people";
				const options = {
					method:"GET",
					
					
				};

				const response = await fetch(url, options);
				if (response.ok) {
					console.log("Aqui están los personajes");
				} else {
					console.error("Error al traer los personajes")
				}
				const data = await response.json()
				console.log(data);
				setStore( {characters: data.results} )
			},
			getVehicleDetails: async(id) => {
				const url = `https://www.swapi.tech/api/vehicles/${id}`
				const options = {
					method:"GET",
				};

				const response = await fetch (url, options);
				if (response.ok) {
					console.log("Aqui estan los detalles");
				} else {
					console.error("Error al traer los personajes")
				}
				const data = await response.json()
				console.log(data.result);
				setStore({vehicleDetails:data.result.properties})
			},
			getSpecieDetails: async(id) => {
				const url = `https://www.swapi.tech/api/species/${id}`
				const options = {
					method:"GET",
				};

				const response = await fetch (url, options);
				if (response.ok) {
					console.log("Aqui estan los detalles");
				} else {
					console.error("Error al traer los personajes")
				}
				const data = await response.json()
				console.log(data.result);
				setStore({specieDetails:data.result.properties})
			},
			getStarshipDetails: async(id) => {
				const url = `https://www.swapi.tech/api/starships/${id}`
				const options = {
					method:"GET",
				};

				const response = await fetch (url, options);
				if (response.ok) {
					console.log("Aqui estan los detalles");
				} else {
					console.error("Error al traer los personajes")
				}
				const data = await response.json()
				console.log(data.result);
				setStore({starshipDetails:data.result.properties})
			},

			getPlanetDetails: async(id) => {
				const url = `https://www.swapi.tech/api/planets/${id}`
				const options = {
					method:"GET",
				};

				const response = await fetch (url, options);
				if (response.ok) {
					console.log("Aqui estan los detalles");
				} else {
					console.error("Error al traer los personajes")
				}
				const data = await response.json()
				console.log(data.result);
				setStore({planetDetails:data.result.properties})
			},

			getCharacterDetails: async (id) => {
				const url = `https://www.swapi.tech/api/people/${id}`;
				const options = {
					method:"GET",
					
					
				};

				const response = await fetch(url, options);
				if (response.ok) {
					console.log("Aqui están los detalles");
				} else {
					console.error("Error al traer los personajes")
				}
				const data = await response.json()
				console.log(data.result.properties);
				setStore( {characterDetails:data.result.properties} )
			},
			getPlanets: async () => {
				const url = "https://www.swapi.tech/api/planets";
				const options = {
					method:"GET",
					
					
				};

				const response = await fetch(url, options);
				if (response.ok) {
					console.log("Aqui están los planetas");
				} else {
					console.error("Error al traer los personajes")
				}
				const data = await response.json()
				console.log(data);
				setStore( {planets:data.results} )
			},

			getFilms: async () => {
				const url = "https://www.swapi.tech/api/films";
				const options = {
					method:"GET",
					
					
				};

				const response = await fetch(url, options);
				if (response.ok) {
					console.log("Aqui están los planetas");
				} else {
					console.error("Error al traer los personajes")
				}
				const data = await response.json()
				console.log(data.result);
				
				setStore( {films:data.result} )
			},
			getSpecies: async () => {
				const url = "https://www.swapi.tech/api/species";
				const options = {
					method:"GET",
					
					
				};

				const response = await fetch(url, options);
				if (response.ok) {
					console.log("Aqui están las especies");
				} else {
					console.error("Error al traer los personajes")
				}
				const data = await response.json()
				console.log(data);
				
				setStore( {species:data.results} )
			},
			getVehicles: async () => {
				const url = "https://www.swapi.tech/api/vehicles";
				const options = {
					method:"GET",
					
					
				};

				const response = await fetch(url, options);
				if (response.ok) {
					console.log("Aqui están los vehículos");
				} else {
					console.error("Error al traer los vehículos")
				}
				const data = await response.json()
				console.log(data);
				
				setStore( {vehicles:data.results} )
			},
			getStarships: async () => {
				const url = "https://www.swapi.tech/api/starships";
				const options = {
					method:"GET",
					
					
				};

				const response = await fetch(url, options);
				if (response.ok) {
					console.log("Aqui están las naves");
				} else {
					console.error("Error al traer las naves")
				}
				const data = await response.json()
				console.log(data);
				
				setStore( {starships:data.results} )
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
