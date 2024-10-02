import React from "react"
import Title from "./title"
import Image from "./image"
import Details from "./details"

import "../styles/styles.css"

function userCharacterCard(props){

    return

    <div>

        < Title userTitle = {props.name}/>
        < Image image = {props.image}/>
        < Details gender = {props.gender}/>
        < Details gender = {props.status}/>

    </div>
}

export default userCharacterCard;