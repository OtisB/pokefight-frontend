import { useEffect, useState } from 'react';

function useApi() {
  const [allPokemon, setAllPokemon] = useState([]);

  const API = "http://localhost:8080/pokemon";

  const getAllPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setAllPokemon(data);
    } catch (error) {
      //TODO error handling
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPokemon();
  }, []);


  return allPokemon;
}

export default useApi;