import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BtnFav } from "./BtnFav.jsx";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const myFavoritos = store.favorites;
	

	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
    	<div className="container-fluid ">
			<Link className="navbar-brand" to="/">
          		<img src="https://pngimg.com/d/star_wars_logo_PNG34.png" alt="Logo Star Wars" width="80px"/>
    		</Link>
      		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        		<span className="navbar-toggler-icon"></span>
      		</button>
		
      	<div className="collapse navbar-collapse" id="navbarsExample05">
        	<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          		<li className="nav-item dropdown dropstart">
            		<a className="nav-link dropdown-toggle text-danger" href="#" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
					
            	<ul className="dropdown-menu bg-secondary">
              		<li><a className="dropdown-item text-light" href="#">Characters</a></li>
              		<li><a className="dropdown-item text-light" href="#">Films</a></li>
              		<li><a className="dropdown-item text-light" href="#">Species</a></li>
					<hr/>
			  		<li><a className="dropdown-item text-light" href="#">Starships</a></li>
			  		<li><a className="dropdown-item text-light" href="#">Vehicles</a></li>
			 	 	<li><a className="dropdown-item text-light" href="#">Planets</a></li>
            	</ul>
          		</li>
        	</ul>
      	</div>
		  <BtnFav />
    	</div>
  	</nav>    
	)
};
