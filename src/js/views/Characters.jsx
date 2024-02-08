import React, { useContext, useState } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router"


export const Characters = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);


    const getFavorite = (item) => {
        actions.addFavorites(item.name)
        setIsFavorite(!isFavorite); // Cambia el estado al hacer clic en el botón
    }

    const handleDetails = (id) => {
        actions.getCharacterDetails(id);
        navigate(`/characters-details/${id}`)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {store.characters.map((pj, index) => (
                    <div key={index} className="col-lg-2 my-2">
                        <div className="card" style={{ maxWidth: "18rem" }}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{pj.name}</h5>
                                <div className="btns d-flex justify-content-md-between">
                                    <button onClick={() => handleDetails(pj.uid)} className="btn btn-sm btn-outline-primary">Details</button>
                                   
                                   <button className="btn btn-sm btn-outline-danger" onClick={() => getFavorite(pj)}><i className={ store.favorites.includes(pj.name) ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart text-danger" } ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}