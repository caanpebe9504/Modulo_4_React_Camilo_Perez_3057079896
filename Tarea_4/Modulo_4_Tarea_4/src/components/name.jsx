import React from "react"

import "../styles/styles.css"

const Name = (props) => {
    
    return (
        <div>
            <h1 className="title">
                {props.name}
            </h1>
        </div>
    )
}

export default Name