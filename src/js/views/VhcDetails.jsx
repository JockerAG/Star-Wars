import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const VhcDetails = () => {
    const {store, actions } = useContext(Context);
    const {vehicleDetails} = store;
    const params = useParams(); 
    const id = params.id;

    const handleOnError = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }

    return (
        <div className="container">
             <div className="card mb-3" style={{maxWidth: "1000px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="img-fluid rounded-start" alt="..." onError={handleOnError}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <h5 className="card-title text-center fw-bold">{vehicleDetails.name}</h5>
                            <ul className="list-group">
                                <li className="list-group-item"><span className="fw-bold me-2">Modelo:</span> {vehicleDetails.model}</li>
                                <li className="list-group-item"><span className="fw-bold me-2">Fabricado:</span>{vehicleDetails.manufacturer}</li>
                                <li className="list-group-item"><span className="fw-bold me-2">Capacidad:</span> {vehicleDetails.cargo_capacity}</li>
                                <li className="list-group-item"><span className="fw-bold me-2">Precio</span>: {vehicleDetails.cost_in_credits}$</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}