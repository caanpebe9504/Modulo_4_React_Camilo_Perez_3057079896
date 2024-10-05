import react from "react"

function Image(props){

    return(
        <div>
            <img id="image" src={props.image} alt="Imagen personaje" />
        </div>
    )
}   

export default Image