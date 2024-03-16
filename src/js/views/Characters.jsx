import React, { useContext, useState } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router"


export const Characters = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const {favorites} = store;
    

    const handleDetails = async (id) => {
         await actions.getCharacterDetails(id);
         if (store.characterDetails && store.characterDetails.homeworld) {
            const planetsSplit = store.characterDetails.homeworld.split("/")
            const planetId = planetsSplit[planetsSplit.length - 1]
            await actions.getPlanetDetails(planetId);
         navigate(`/characters-details/${id}`)
    }
}

    const isCharacterFavorite = (name) => favorites.includes(name);

    const getFavorite = (item) => {
        if (isCharacterFavorite(item.name)){
            actions.deleteFav(item.name, favorites);
        } else {
            actions.addFavorites(item.name)
        }
        
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
                                   
                                   <button className="btn btn-sm btn-outline-danger" onClick={() => getFavorite(pj)}><i className={ isCharacterFavorite(pj.name) ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart text-danger" } ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}