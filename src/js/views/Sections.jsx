import React from "react";
import { Link, useNavigate } from "react-router-dom";




export const Sections = () => {



    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-4">
                    <Link to="/characters">
                    <div className="card">
                        
                        <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" class="img-fluid" alt="..."></img>
                        <div className="card-img-overlay text-center d-flex align-items-end justify-content-center">
                            <h4 className="card-title text-danger fw-bold bg-dark bg-gradient bg-opacity-75 px-4">CHARACTERS</h4>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/films">
                <div className="card">
                        <img src="https://starwars-visualguide.com/assets/img/categories/films.jpg" class="img-fluid" alt="..."></img>
                        <div className="card-img-overlay text-center d-flex align-items-end justify-content-center">
                            <h4 className="card-title text-light fw-bold bg-dark bg-gradient bg-opacity-75 px-4">FILMS</h4>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/species">
                    <div className="card">
                        <img src="https://starwars-visualguide.com/assets/img/categories/species.jpg" class="img-fluid" alt="..."></img>
                        <div className="card-img-overlay text-center d-flex align-items-end justify-content-center">
                            <h4 className="card-title text-success fw-bold bg-dark bg-gradient bg-opacity-75 px-4">SPECIES</h4>
                        </div>
                    </div>
                    </Link>
                </div>
                
            </div>
            <div className="row mt-3">
                <div className="col-md-4">
                    <Link to="/starships">
                    <div className="card">
                        <img src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" class="img-fluid" alt="..."></img>
                        <div className="card-img-overlay text-center d-flex align-items-end justify-content-center">
                            <h4 className="card-title text-light fw-bold bg-dark bg-gradient bg-opacity-75 px-4">STARSHIPS</h4>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/vehicles">
                    <div className="card">
                        <img src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" class="img-fluid" alt="..."></img>
                        <div className="card-img-overlay text-center d-flex align-items-end justify-content-center">
                            <h4 className="card-title text-primary fw-bold bg-dark bg-gradient bg-opacity-75 px-4">VEHICLES</h4>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/planets">
                    <div className="card">
                        <img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" class="img-fluid" alt="..."></img>
                        <div className="card-img-overlay text-center d-flex align-items-end justify-content-center">
                            <h4 className="card-title text-warning fw-bold bg-dark bg-gradient bg-opacity-25 px-4">PLANETS</h4>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}