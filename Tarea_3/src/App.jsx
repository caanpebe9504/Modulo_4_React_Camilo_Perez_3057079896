import './App.css'
import React from "react"

//import Title from "./components/Title"
//import Image from "./components/Image"
//import Details from "./components/Details"

import CharacterCard from './Ts_Files/CharacterCard'

function App() {
  
  return (
    
    <div id = "card_container">

      <div id="card">

        <CharacterCard   

          title = {"Nicky Minaj"} 
          image = {"../public/Nicky_Minaj_Pic.jpg"} 
          genre = { "Femenino"} 
          currentStatus = {"Activa"} 
          profession = {"rapera"}

          />  

      </div>

      <div id ="card">

        <CharacterCard   

          title = {"Joyhauser"} 
          image = {"../public/Joyhauser_pic.jpg"} 
          genre = { "Masculino"} 
          currentStatus = {"Activos"} 
          profession = {"Techno duo"}

        />  

      </div>
        
      <div id="card">
        <CharacterCard   

          title = {"Avicii"} 
          image = {"../public/Avicii_pic.jpg"} 
          genre = { "Masculino"} 
          currentStatus = {"Fallecido"} 
          profession = {"DJ"}

        />  

      </div>
        
      </div>
  )

}


export default App

