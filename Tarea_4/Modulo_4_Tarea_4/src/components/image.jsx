import React from "react"

import "../styles/styles.css"

const Image = (props) => {
    
    return (
        <div>
            <img id="img" src={props.image} alt="Foto_personaje_R&M" />
        </div>
    )
}

export default Image