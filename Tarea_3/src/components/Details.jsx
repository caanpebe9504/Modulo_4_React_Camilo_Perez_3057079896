import React from "react"

async function Details(props){

    const url = "https://randomuser.me/api/"

    const fetchUrl = (await fetch(url)).json()
    const userDetails = await fetchUrl[0].results

    return ( <div>
        <p>
            <b>Genero:</b>{userDetails.gender}
        </p>
        <p>
            <b>Estado</b>{userDetails.status}
        </p>
    </div>
    
    )
    
}

export default Details;