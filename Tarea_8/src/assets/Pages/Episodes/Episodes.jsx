import React , {useState, useEffect} from 'react'
import EpisodeCard from './EpisodeCard'

const Episodes = () =>{

  const [ charactersList, setCharacterList ] = useState([])
  const [info, setInfo] = useState([])
  const [page, setPage] = useState(1)
  const [animate, setAnimate] = useState(false)


  useEffect(() => {
    
    const url = `https://rickandmortyapi.com/api/episode/?page=${page}`

    fetch(url) 
    .then((apiResponse) => apiResponse.json())
    .then((userData) => {
      console.log(userData)
      setCharacterList(userData.results)
      setInfo(userData.info)

    })
    .catch((error) => console.error("Error fetching data:", error));
  }, [page])

  const nextPage = () => {
    if(info.next){
      setAnimate(true)
      setPage((currentPage) => currentPage + 1)
    }
  }

  const prevPage = () => {
    if(info.prev){
      setAnimate(true)
      setPage((currentPage) => currentPage - 1)
    }
  }

  return(

    <div>
      <h1>Rick & Morty Episodes</h1>
      <div id="container">
          {charactersList.map((episode) => (
             <EpisodeCard 
                key={episode.id} 
                name={episode.name}
                air_date={episode.air_date} 
                create={episode.episode}
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

export default Episodes