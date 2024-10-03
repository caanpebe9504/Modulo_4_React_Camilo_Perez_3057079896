import './App.css'

import RickAndMortyCharacterCard from "./components/RickAndMortyCharacterCard"
import "./styles/styles.css"

function App() {
  
  return (  
    
      <div id="card_container">

        <h1 className='title'>Personajes de Rick & Morty</h1>
 
        <div id='cards'>
          <RickAndMortyCharacterCard id={1}/>
          <RickAndMortyCharacterCard id={2}/> 
          <RickAndMortyCharacterCard id={4}/> 
          <RickAndMortyCharacterCard id={100}/>
          <RickAndMortyCharacterCard id={13}/>
          <RickAndMortyCharacterCard id={11}/>
          <RickAndMortyCharacterCard id={33}/>
          <RickAndMortyCharacterCard id={10}/>
        </div>        
        
        
      </div>
  )
}

export default App
