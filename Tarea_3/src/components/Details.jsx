import React from "react"
import "../styles/styles.css"

function Details(props){


    return ( 
    <div>
        <p className="detail">
            <b>Género:  </b>{props.gender}
        </p>
        <p className="detail">
            <b>Estado:  </b>{props.status}
        </p>
        <p className="detail">
            <b>Ocupación:  </b>{props.profession}
        </p>
    </div>
    )
}

export default Details;