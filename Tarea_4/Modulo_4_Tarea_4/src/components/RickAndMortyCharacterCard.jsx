import { useState, useEffect } from 'react'
import react from "react"

import CharacterCard from "./characterCard"

import "../styles/styles.css"

function RickAndMortyCharacterCard(props){

    const [name, setName ] = useState("")
    const [image, setImage ] = useState("")
    const [gender, setGender] = useState("")
    const [status, setStatus] = useState("")
    const [id , setId] = useState("")

    const url = "https://rickandmortyapi.com/api/character/"
    const rickAndMortyCharacterId = props.id

    useEffect(() => {

        fetch(url + rickAndMortyCharacterId)

        .then((apiResponse) => apiResponse.json())
        .then((userData) => {

            setName(userData.name)
            setImage(userData.image)
            setGender(userData.gender)
            setStatus(userData.status)
            setId(userData.id)

        })
    },[])

    return (
            
        
        <div id="card">
            <CharacterCard 

                name = {name}
                image = {image}
                gender = {gender}
                status = {status}

            />
        </div>
    )
}

export default RickAndMortyCharacterCard;