import { useState, useEffect } from 'react'
import "./App_styles.css"
import CharacterCard from "./components/CharacterCard"


function App() {

  const [ charactersList, setCharacterList ] = useState([])
  const [page, setPage] = useState(1)
  const [info, setInfo] = useState([])
  const [animate, setAnimate] = useState(false)

    useEffect(() => {
    
      const url = `https://rickandmortyapi.com/api/character/?page=${page}`

      fetch(url) 
      .then((apiResponse) => apiResponse.json())
      .then((userData) => {

        setCharacterList(userData.results)
        setInfo(userData.info)

      })
      .catch((error) => console.error("Error fetching data:", error));
    }, [page])

    const nextPage = () => {
      if(info.next){
        setAnimate(true)
        setPage((nextPage) => nextPage + 1)
      }
    }

    const prevPage = () => {
      if(info.prev){
        setAnimate(true)
        setPage((prevPage) => prevPage - 1)
      }
    }


  return(
    <div>
        <h1>Personajes de Rick & Morty</h1>
      <div id="container">
        {charactersList.map((character) => (
            <CharacterCard 
              key={character.id} 
              name={character.name} 
              image={character.image} 
              status={character.status} 
              create={character.created}
              animate={animate}
            />
        ))}
      </div>

      <div id="page_section">
        <button onClick={prevPage}>Anterior</button>
        <button onClick={nextPage}>Siguiente</button>  
      </div>
    </div>
  )
}

export default App
