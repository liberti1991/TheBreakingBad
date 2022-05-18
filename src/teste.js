import { useEffect, useState } from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';

export const App = () => <MyRoutes />;

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CharactersList />} />
      <Route path='/:id' element={<CharacterDetails />} />
    </Routes>
  );
};

function CharactersList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch('https://www.breakingbadapi.com/api/characters');

      const characters = await res.json();

      const transformedCharacters = characters.map((character) => {
        return { id: character.char_id, name: character.name };
      });

      setCharacters(transformedCharacters);
    };

    getCharacters();
  }, []);

  return (
    <ul>
      {characters.map(({ id, name }) => {
        return (
          <li key={id}>
            <Link to={id.toString()}>{name}</Link>
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
    const getCharacter = async () => {
      const res = await fetch(
        'https://www.breakingbadapi.com/api/characters/' + id
      );

      const character = await res.json();

      setCharacter(...character);
    };

    getCharacter();
  }, []);

  if (!character) {
    return <p>Loading...</p>;
  }

  return <div>{character.status}</div>;
}