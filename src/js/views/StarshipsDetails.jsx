import React, { useContext } from "react"
import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const StarshipsDetails = () => {
    const {store, actions } = useContext(Context);
    const {starshipDetails} = store;
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
                        <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} className="img-fluid rounded-start" alt="..." onError={handleOnError}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <h5 className="card-title text-center fw-bold">{starshipDetails.name}</h5>
                            <ul className="list-group">
                            <li className="list-group-item"><span className="fw-bold me-2">Modelo:</span> {starshipDetails.model}</li>
                                <li className="list-group-item"><span className="fw-bold me-2">Fabricado:</span>{starshipDetails.manufacturer}</li>
                                <li className="list-group-item"><span className="fw-bold me-2">Km/h:</span> {starshipDetails.max_atmosphering_speed}</li>
                                <li className="list-group-item"><span className="fw-bold me-2">Clase:</span> {starshipDetails.starship_class}</li>
                                <li className="list-group-item"><span className="fw-bold me-2">Precio</span>: {starshipDetails.cost_in_credits}$</li>
                            </ul>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}