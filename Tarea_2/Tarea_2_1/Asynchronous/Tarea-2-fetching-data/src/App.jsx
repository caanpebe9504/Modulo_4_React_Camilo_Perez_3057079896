import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {

  const [ currentArtistInfo, setCurrentArtistInfo] = useState(null)

  
  async function randomArtistInfo(){

    const response = await fetch ("https://randomuser.me/api/")
    const artistInfo = await response.json()
  
    setCurrentArtistInfo(artistInfo.results[0])
  }

  useEffect(() => {
    randomArtistInfo()
  }, [])

  return (

    <div>

      <h1>Artista Favorito</h1>

      {currentArtistInfo ? (
        <>

        <img src={currentArtistInfo.picture.large} alt="Foto del artista" />
  
        <p>
          Nombre: {currentArtistInfo.name.title} {currentArtistInfo.name.first} {currentArtistInfo.name.last} <br />
          País de origen: {currentArtistInfo.location.country} <br />
          Nombre artístico: {currentArtistInfo.id.name} <br />
          Edad: {currentArtistInfo.dob.age} <br />
  
        </p>
  
      </>
        
      ) : ( <p> Data cargando </p>) 

      }
      <button onClick={randomArtistInfo}> Click acá para ver otro artista  </button>
    </div>
  );
}

export default App
