import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { extract } from "query-string";


export const CharactersDetails = () => {
    const {store, actions } = useContext(Context);
    const {characterDetails, planetDetails} = store;
    const [planets, setPlanets] = useState([]);
    const params = useParams(); 
    const id = params.id;


    const handleOnError = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }
    return (
        <div className="container">
             <div className="card mb-3" style={{maxWidth: "600px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid rounded-start" alt="..." onError={handleOnError}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <h5 className="card-title">{characterDetails.name}</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Heigh: {characterDetails.height}</li>
                                <li className="list-group-item">Kg: {characterDetails.mass}</li>
                                <li className="list-group-item">Pelo: {characterDetails.hair_color}</li>
                                <li className="list-group-item">Ojos: {characterDetails.eye_color}</li>
                                <li className="list-group-item">Genero: {characterDetails.gender}</li>
                                <li className="list-group-item">Homeworld: {planetDetails.name}</li>
                                
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}