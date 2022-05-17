import styled from "styled-components";

import logo from "../../img/logo.png";

export const Logo = () => {
  return (
    <Container>
      <img src={logo} alt={"Logo"} />
    </Container>
  );
};

const Container = styled.header`
  background-color: #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;

  img{
    width: 80px;
  }

  @media screen and (min-width: 648px) {
    height: 200px;

    img{
      width: 200px;
    }
  }
`;
