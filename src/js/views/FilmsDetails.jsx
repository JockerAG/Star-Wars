import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const FilmsDetails = () => {
    const {store, actions} = useContext(Context)
    const {filmsDetails} = store;
    const params = useParams()
    const id = params.id;

    const handleOnError = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }
    
    // Aquí hay que utilizar useEffects 

    // 

    return (
        <div className="container">
             <div className="card mb-3" style={{maxWidth: "700px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} className="img-fluid rounded-start" alt="..." onError={handleOnError}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <h5 className="card-title text-center fw-bold">{filmsDetails.title}</h5>
                            <ul className="list-group">
                                <li className="list-group-item "><span className="fw-bold">Director:</span> {filmsDetails.director}</li>
                                <li className="list-group-item"><span className="fw-bold">Producer:</span> {filmsDetails.producer}</li>
                                
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    
                </div>
            </div>
        </div>
    )
}