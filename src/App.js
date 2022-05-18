// import { axios } from "axios";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { Logo } from "./components/layout/Logo";
import { MyRoutes } from "./components/myRoutes/MyRoutes";

function App() {
  const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   axios.get("https://breakingbadapi.com/api/characters")
  //     .then((characters) => {
  //       const transformedCharacters = characters.map((character) => {
  //         return { id: character.char_id, name: character.name, img: character.img };
  //       });

  //       setCharacters(transformedCharacters);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch("https://www.breakingbadapi.com/api/characters");

      const characters = await res.json();

      const transformedCharacters = characters.map((character) => {
        return { id: character.char_id, name: character.name, img: character.img };
      });

      setCharacters(transformedCharacters);
    };

    getCharacters();
  }, []);

  return (
    <>
      <Logo />
      <Container>
        <MyRoutes characters={characters} />
      </Container>
    </>
  );
}


export default App;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
