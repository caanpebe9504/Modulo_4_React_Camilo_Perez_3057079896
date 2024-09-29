import React from "react";
import "../styles/styles.css"

function Image(props){
    
    return <img id="img" src={props.url} alt ="Foto del artista"/>
}

export default Image;