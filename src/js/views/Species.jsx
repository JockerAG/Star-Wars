import React, { useContext, useState } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router";



export const Species = () => {
const {store, actions} = useContext(Context)
const [isFavorite, setIsFavorite] = useState();
const navigate = useNavigate();

const handleDetails = (id) => {
  actions.getSpecieDetails(id);
  navigate(`/specie-details/${id}`)
}

const getFavorite = (item) => {
  actions.addFavorites(item.name)
  setIsFavorite(!isFavorite);
}

    return (
        <div className="container-fluid">
            <div className="row">
                {store.species.map((race, index) => (
                    <div key={index} className="col-lg-2 my-2">
                    <div className="card" style={{maxWidth: "18rem"}}>
                      <img src={`https://starwars-visualguide.com/assets/img/species/${race.uid}.jpg`}className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h4 className="card-title fw-bold">{race.name}</h4>
                                <div className="btns d-flex justify-content-md-between">
                                    <button onClick={() => handleDetails(race.uid)} className="btn btn-sm btn-outline-primary">Details</button>
                                   
                                   <button className="btn btn-sm btn-outline-danger" onClick={() => getFavorite(race)}><i className={ store.favorites.includes(race.name) ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart text-danger" } ></i></button>
                                </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    )
}