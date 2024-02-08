import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const SpeciesDetails = () => {
    const {store, actions} = useContext(Context);
    const {specieDetails} = store;
    const params = useParams();
    const id = params.id;
    const handleOnError = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }

    return (
        <div className="container">
             <div className="card mb-3" style={{maxWidth: "800px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} className="img-fluid rounded-start" alt="..." onError={handleOnError}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <h5 className="card-title text-center fw-bold">{specieDetails.name}</h5>
                            <ul className="list-group">
                                <li className="list-group-item"><span className="fw-bold me-1">Raza:</span> {specieDetails.classification}</li>
                                <li className="list-group-item"><span className="fw-bold me-1">Tamaño:</span>{specieDetails.average_height}</li>
                                <li className="list-group-item"><span className="fw-bold me-1">Color piel:</span> {specieDetails.skin_colors}</li>
                                <li className="list-group-item"><span className="fw-bold me-1">Idioma:</span> {specieDetails.language}</li>
                            </ul>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 