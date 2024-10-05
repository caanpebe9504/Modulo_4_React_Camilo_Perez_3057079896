import react, { useEffect, useState } from "react"

import Image from "./image"
import Name from "./name"
import Description from "./description"

const characterCard = (props) => 
    { 

    const url = "https://rickandmortyapi.com/api/character/"

    const userId = props.id

    const [ user, setUser ] = useState("")

    useEffect(() => {


        fetch(url + userId) 
         .then((apiResponse) => apiResponse.json())
         .then((userData => {
            setUser(userData.props)
         }))

    }, [])

    return (
    
        <>

        </>
    )
}

export default characterCard