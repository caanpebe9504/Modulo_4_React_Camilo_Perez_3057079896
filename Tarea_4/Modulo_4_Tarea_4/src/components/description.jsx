import React from "react"

const Description = (props) => {

    return (
        <div>
            <p>
                {props.status}
                {props.gender}
            </p>
        </div>
    )
}

export default Description