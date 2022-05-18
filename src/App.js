import axios from 'axios';
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Logo } from "./components/layout/Logo";
import { MyRoutes } from "./components/myRoutes/MyRoutes";

export const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios.get("https://www.breakingbadapi.com/api/characters/").then((response) => {
      const { data } = response;
      setCharacters(data);
      setIsloading(false);
    });
  }, []);

  return (
    <>
      <Logo />
      <Container>
        <MyRoutes isLoading={isLoading} characters={characters} />
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
