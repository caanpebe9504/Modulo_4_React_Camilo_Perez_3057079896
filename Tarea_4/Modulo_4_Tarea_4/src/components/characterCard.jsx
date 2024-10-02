import React from "react"

import Name from "./name"
import Image from "./image"
import Description from "./description"

const characterCard = (props) => {

    return (
        <div>
            
            <Name name = {props.name} />
            <Image image = {props.image} />
            <Description status = {props.status} gender = {props.gender} />
            
        </div>
    )
}

export default characterCard