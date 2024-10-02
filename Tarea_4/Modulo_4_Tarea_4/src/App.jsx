import { useState, useEffect } from 'react'
import './App.css'

import CharacterCard from "./components/characterCard"

function App() {
  
  const [name, setName] = useState ("")
  const [image, setImage] = useState ("")
  const [gender, setGender] = useState ("")
  const [status, setStatus] = useState ("")

  const url = "https://rickandmortyapi.com/api/character/"
  const userId = 4

  useEffect(() => {

    fetch(url + userId)
      .then((response) => response.json())
      .then((userData) => {
        
        setName(userData.name)
        setImage(userData.image)
        setGender(userData.gender)
        setStatus(userData.status)

      })
  },[])
    

  return (  
      <div>

        <h1>Personajes de Rick & Morty</h1>

        <CharacterCard 
        
          name =  {name}
          image = {image}
          gender = {gender}
          status = {status}

        />

      </div>
  )
}

export default App
