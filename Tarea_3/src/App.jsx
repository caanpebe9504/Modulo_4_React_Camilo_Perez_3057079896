import './App.css'
import React from "react"

//import Title from "./components/Title"
//import Image from "./components/Image"
//import Details from "./components/Details"

import CharacterCard from './Ts_Files/CharacterCard'

import "./styles/styles.css"
/*
function App() {
  
  const characters = [ {
    
    title :"Nicky Minaj",
    image : "../public/Nicky_Minaj_Pic.jpg",
    genre : "Femenino",
    currentStatus : "Activa",
    profession : "rapera"
  },

  {
    
    title :"Joyhauser",
    image : "../public/Joyhauser_pic.jpg",
    genre : "Masculino",
    currentStatus : "Activos",
    profession : "Techno duo"
  },

  {
    
    title :"Avicii",
    image : "../public/Avicii_pic.jpg",
    genre : "Masculino",
    currentStatus : "Fallecido",
    profession : "DJ"
  },

  ]
  
  return (
    
    <div id = "card_container">

      {characters.map((character,position) => (

        <div key={position} id="card">

        <CharacterCard   

          position = {position}
          title = {character.title} 
          image = {character.image} 
          genre = {character.genre} 
          currentStatus = {character.currentStatus} 
          profession = {character.profession}

        />  
        </div>
      ))}

    </div>
    
  );

}


export default App
*/
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

