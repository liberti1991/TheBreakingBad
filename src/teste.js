import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

const url = 'https://www.breakingbadapi.com/api/characters/';

export const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      const { data } = response;
      setCharacters(data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<CharactersList characters={characters} />} />
      <Route path=':id' element={<CharacterDetails />} />
      <Route path='*' element={<p>No Matched Location!</p>} />
    </Routes>
  );
};

function CharactersList({ characters }) {
  return (
    <ul>
      {characters.map(({ char_id, name }) => {
        return (
          <li key={char_id}>
            <Link to={String(char_id)}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

function CharacterDetails() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(url + id).then((response) => {
      const { data } = response;
      setCharacter(...data);
    });
  }, []);

  if (!character) {
    return <p>Loading...</p>;
  }

  return <p>{character.status}</p>;
}