// import { Express } from 'express';
import axios from 'axios';
import md5 from 'md5';
import dotenv from 'dotenv';

const marvelController = {
  async getCharacters(req, res) {
    try {
      await dotenv.config();
      const apiKey = process.env.MP_KEY;
      const publicKey = process.env.MPUB_KEY;

      const ts = new Date().getTime().toString();
      const hash = md5(ts + apiKey + publicKey);

      const endpoint = `v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      const response = await axios.get(`http://gateway.marvel.com/${endpoint}`);

      //returns an array of objects, we want to use the properties: 'name', 'description', 'thumbnail.path'
      const charactersArray = response.data.data.results;
      //   console.log(charactersArray[0].name);

      const limitedCharactersArray = charactersArray.map((character) => {
        const limitedCharacter = {
          name: character.name,
          description: character.description,
          thumbnail: {
            path: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            extension: character.thumbnail.extension,
          },
        };
        return limitedCharacter;
      });

      //   console.log(limitedCharactersArray);

      res.setHeader('Access-Control-Allow-Origin', null);
      res.status(200);
      res.json(limitedCharactersArray);
    } catch (error) {
      console.log('Error retrieving charactersArray:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Add other methods here as needed
};

export default marvelController;
