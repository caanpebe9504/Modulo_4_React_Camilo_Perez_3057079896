import './App.css'
import React from "react"
import Title from "./components/Title"
import Image from "./components/Image"
import Details from "./components/Details"

function App() {
  
  const artistTitle = "Nicky Minaj"
  const artistPicture = "https://cdn.britannica.com/68/163068-050-349331AA/Nicki-Minaj-Hammersmith-Apollo-London-June-24-2012.jpg?w=300"
  const artistGenre = "Female"
  const artistsStatus = "Active"

  return (

    <div>

      <Title title={artistTitle} />
      
      <Image url={artistPicture} />
  
      <Details genre={artistGenre} status={artistsStatus} />

    </div>

  );
  
}


export default App
