import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { HomePage } from "./components/screens/HomePage";
import { Logo } from "./components/layout/Logo";

function App() {
  const [charactes, setCharactes] = useState([]);

  useEffect(() => {
    axios
      .get("https://breakingbadapi.com/api/characters")
      .then((response) => {
        setCharactes(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Logo />
      <Container>
        <HomePage charactes={charactes} />
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
