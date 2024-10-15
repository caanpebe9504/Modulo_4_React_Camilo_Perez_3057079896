import React from "react"
import "./Home"

const HomeCharacterCard = ({name, image, status, create,animate}) => {

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
                    Status: <span className={getStatusClass(status)}>{status}</span>
                </p>
                <h2>Created on: </h2>
                <p>{create}</p>
            </div>
                
            
    )
}

export default HomeCharacterCard