import React from "react"
import "../components_Styles/CharacterCardStyles.css"

const CharacterCard = ({name, image, status, create,animate}) => {

    const getStatusClass = (status) =>{
        switch(status.toLowerCase()){
            case "alive" :
                return "status_alive"
            case "dead":
                return "status_dead"
            case "unknown":
                return "status_unknown"
            default:
                return ""
        }
    }

    return(
            <div id="container_Character"> 
                <img className={animate ? "swirl" : ""} src={image} alt={name} />
                <h1>{name}</h1>
                <p>
                    Estado: <span className={getStatusClass(status)}>{status}</span>
                </p>
                <h2>Fecha de creación</h2>
                <p>{create}</p>
            </div>
                
            
    )
}

export default CharacterCard