import React, { useContext, useState } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router"


export const Planets = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState();
    const handleOnError = (e) => {
      e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

    const handleDetails = (id) => {
      actions.getPlanetDetails(id);
      navigate(`/planet-details/${id}`)
  }

    const getFavorite = (item) => {
      actions.addFavorites(item.name)
      setIsFavorite(!isFavorite);
    }

    return (
        <div className="container">
            <h1 className="text-center">Planets</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {store.planets.map((planets, index) => (
                    <div key={index} className="col-lg-2 my-2">
                      <div className="card" style={{maxWidth: "18rem"}}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${index+1}.jpg`} className="card-img-top" alt="..." onError={handleOnError}/>
                        <div className="card-body">
                          <h5 className="card-title">{planets.name}</h5>
                            <div className="btns d-flex justify-content-md-between">
                                    <button onClick={() => handleDetails(planets.uid)} className="btn btn-sm btn-outline-primary">Details</button>
                                   
                                   <button className="btn btn-sm btn-outline-danger" onClick={() => getFavorite(planets)}><i className={ store.favorites.includes(planets.name) ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart text-danger" } ></i></button>
                            </div>
                        </div>
                      </div>
                    </div>
                    
                   
                ))}
                
            </div>
        </div>
    )
}