import React, { useEffect, useState } from "react"
import LoginForm from "../Login/LoginForm"

const UserFetch = (props) => {

    const [name, setName]  = useState("")
    const [image, setImage] = useState("")
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
        
    const url = "https://rickandmortyapi.com/api/character/"
    const userId = props.id
    const inputName = props.name

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const apiResponse = await fetch(url + userId)
                if(!apiResponse.ok) {
                    throw new Error ("Error al obtener datos del usuario.")
                }

                const userData = await apiResponse.json()

                setName(userData.name)
                setImage(userData.image)
                setStatus(userData.status)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [userId])

    if(loading) return <p>Cargando...</p>
    if (error) return <p>Error:{error} </p>

    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt="" />
            <p>Estado:{status} </p>
        </div>
    )
}

export default UserFetch;