import styled from "styled-components";

import { url } from "./components/hooks/url";
import { useLoadItems } from "./components/hooks/useLoadItems";

import { Loading } from "./components/layout/Loading";
import { Logo } from "./components/layout/Logo";
import { MyRoutes } from "./components/myRoutes/MyRoutes";

export const App = () => {

  const { items: characters, isLoading, loadMore, showButton, AllItems } = useLoadItems(url, 10);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Logo />
      <Container>
        <MyRoutes characters={characters} loadMore={loadMore} showButton={showButton} AllItems={AllItems} />
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
