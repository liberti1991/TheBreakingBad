import styled from "styled-components";
import { useAxios } from "./components/hooks/useAxios";
import { Loading } from "./components/layout/Loading";

import { Logo } from "./components/layout/Logo";
import { MyRoutes } from "./components/myRoutes/MyRoutes";

export const App = () => {
  const { characters, isLoading } = useAxios();
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Logo />
      <Container>
        <MyRoutes characters={characters} />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
