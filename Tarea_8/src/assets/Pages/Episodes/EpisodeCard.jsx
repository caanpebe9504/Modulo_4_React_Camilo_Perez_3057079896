import React from "react"
import "./EpisodeCardStyles.css"
import Logo from "./Logo.jpg"

const EpisodeCard = ({name, air_date, create,animate}) => {


    return(
            <div id="container_Episode"> 
                <img className={animate ? "swirl" : ""} src={Logo} alt={name} />
                <h1>{name}</h1>
                <p>
                    Air date: <span>{air_date}</span>
                </p>
                <h2>Episode: </h2>
                <p>{create}</p>
            </div>
                
            
    )
}

export default EpisodeCard