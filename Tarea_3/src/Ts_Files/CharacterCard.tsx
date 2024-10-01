import React from "react"

import "../styles/styles.css"

interface CharacterCardProps {
    title: string;
    image: string;
    genre: string;   
    currentStatus: string;
    profession: string;
}

function CharacterCard({title,image,genre,currentStatus,profession} : CharacterCardProps) {

    return (

        <div>

            <h1 className = "title">{title}</h1>
            <img id="img" src={image} alt="Imagen artista" />
            <p className = "detail"> Género: {genre}</p>
            <p className = "detail"> Estado: {currentStatus}</p>
            <p className = "detail">Profesión: {profession}</p>
            
        </div>

    )
}

export default CharacterCard;