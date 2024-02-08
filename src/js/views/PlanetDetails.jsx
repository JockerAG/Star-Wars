import React, { useContext } from "react"
import { Context } from "../store/appContext"
import { useParams } from "react-router";


export const PlanetDetails = () => {
    const {store, actions} = useContext(Context)
    const {planetDetails} = store;
    const params = useParams()
    const id = params.id;

    const handleOnError = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }


    return (
        <div className="container">
             <div className="card mb-3" style={{maxWidth: "700px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-fluid rounded-start" alt="..." onError={handleOnError}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <h5 className="card-title text-center fw-bold">{planetDetails.name}</h5>
                            <ul className="list-group">
                                <li className="list-group-item "><span className="fw-bold">Clima:</span> {planetDetails.climate}</li>
                                <li className="list-group-item"><span className="fw-bold">Geografia:</span> {planetDetails.terrain}</li>
                                <li className="list-group-item"><span className="fw-bold">Población:</span> {planetDetails.population}</li>
                                <li className="list-group-item"><span className="fw-bold">Diametro:</span> {planetDetails.diameter}</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}