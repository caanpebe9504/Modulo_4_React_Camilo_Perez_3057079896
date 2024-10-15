import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import HomeCharacterCard from './HomeCharacterCard';

const Home = () => {
  const [charactersList, setCharacterList] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('name') || '';
  const statusParam = queryParams.get('status') || '';
  const genderParam = queryParams.get('gender') || '';

  useEffect(() => {
    const fetchCharacters = async () => {
      const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}`;
      
      try {
        const response = await fetch(url);
        const userData = await response.json();
        setCharacterList(userData.results);
        setInfo(userData.info);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharacters();
  }, [name, status, gender, page]);

  const nextPage = () => {
    if (info.next) {
      setAnimate(true);
      setPage((currentPage) => currentPage + 1);
    }
  };

  const prevPage = () => {
    if (info.prev) {
      setAnimate(true);
      setPage((currentPage) => currentPage - 1);
    }
  };

  const onSearch = () => {
    const filterParams = { name: query, status, gender };
    const params = new URLSearchParams(filterParams).toString(); 
    navigate(`/?${params}`); 
    setPage(1); 
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Rick & Morty Characters</h1>

      <form onSubmit={(e) => { e.preventDefault(); onSearch(); }} className="mb-4 flex flex-col space-y-2">
    <input
        type="text"
        name="search"
        placeholder="Search by name"
        
        onChange={(e) => setQuery(e.target.value)}
        defaultValue={name}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
    <input
        type="text"
        name="status"
        placeholder="Status (alive, dead, unknown)"
        onChange={(e) => setStatus(e.target.value)}
        defaultValue={statusParam}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
    <input
        type="text"
        name="gender"
        placeholder="Gender (female, male, genderless, unknown)"
        onChange={(e) => setGender(e.target.value)} 
        defaultValue={genderParam}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
    <button 
        type="button" 
        onClick={onSearch} 
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
    >
        Search
    </button> 
</form>

      <div id="container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {charactersList.map((character) => (
          <HomeCharacterCard 
            key={character.id} 
            name={character.name} 
            image={character.image} 
            status={character.status} 
            created={character.created}
            animate={animate}
          />
        ))}
      </div>

      <div id="page_section" className="flex justify-between mt-4">
        <button 
          onClick={prevPage} 
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition"
        >
          Anterior
        </button>
        <button 
          onClick={nextPage} 
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition"
        >
          Siguiente
        </button>  
      </div>
    </div>
  );
};

export default Home;