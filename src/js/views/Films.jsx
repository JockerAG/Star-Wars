import React, { useContext, useState } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router";


export const Films = () => {
    const {store, actions} = useContext(Context)
    const [isFavorite, setIsFavorite] = useState();
    const navigate = useNavigate()

    const handleDetails = (id) => {
      actions.getFilmsDetails(id);
      navigate(`/film-details/${id}`)
  }

    const getFavorite = (item) => {
      if(store.favorites.includes(item)){
        // Si el objeto ya esta en la lista de favoritos, elimina el objeto
        actions.deleteFav(item, store.favorites);
      } else {
        // Si no está en la lista de favoritos, añade el objeto
        actions.addFavorites(item);
      }
      setIsFavorite(!isFavorite)
    }
    
    return (
        <div className="container-fluid">
            <div className="row">
                {store.films.map((film, index) => (
                     <div key={index} className="col-lg-2 my-2">
                     <div className="card" style={{maxWidth: "18rem"}}>
                       <img src={`https://starwars-visualguide.com/assets/img/films/${index+1}.jpg`} className="card-img-top" alt="..."/>
                       <div className="card-body">
                         <h4 className="card-title fw-bold">{film.properties.title}</h4>
                         <span>{film.properties.producer}</span>
                                <div className="btns d-flex justify-content-md-between my-3">
                                    <button onClick={() => handleDetails(film.uid)} className="btn btn-sm btn-outline-primary">Details</button>
                                   
                                   <button className="btn btn-sm btn-outline-danger" onClick={() => getFavorite(film.properties.title)}><i className={ store.favorites.includes(film.properties.title) ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart text-danger" } ></i></button>
                                </div>
                       </div>
                     </div>
                   </div>
                ))}
            </div>
        </div>
    )
}