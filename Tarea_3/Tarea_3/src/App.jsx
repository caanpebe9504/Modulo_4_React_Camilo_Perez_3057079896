import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react"
import Title from "./components/Titulo"
import Image from "./components/Imagen"
import Details from "./components/Details"

function App() {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div>
      {/* Titulo de el artista/personaje */}
      <Titulo
        title={Title}
      />
      {/* Imagen de el artista/personaje */}
      <Image
        url={Image} 
      />
      {/* Detalles de el artista/personaje */}
      <Details
        genre={Details} 
        status={Details} 
      />
    </div>
  );
}


export default App
