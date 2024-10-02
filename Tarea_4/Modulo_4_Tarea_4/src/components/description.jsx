import React from "react"

import "../styles/styles.css"

const Description = (props) => {

    return (
        <div className="detail">
            <p>
                Status: {props.status}      
            </p>
                 
            <p>
                Género: {props.gender}
            </p>
        </div>
    )
}

export default Description