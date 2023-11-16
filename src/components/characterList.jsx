// src/components/CharacterList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import router from '../routes/marvelCharacters';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Make the API call here
    axios
      .get(router) // Assuming this is the endpoint in your Express server
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <div>
      <h1>Marvel Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <img src={character.thumbnail.path} alt={character.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
