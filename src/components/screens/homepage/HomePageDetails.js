import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

import { Loading } from "../../layout/Loading";
import { useAxios } from "../../hooks/useAxios";

import { GiReturnArrow } from "react-icons/gi";

export const HomePageDetails = () => {
  const { id } = useParams();
  const { character, isLoading } = useAxios(id);

  if (isLoading) {
    return <Loading />;
  }

  if (!character) {
    return <p>Character does not exist</p>;
  }

  return (
    <>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
        <span>/</span>
        <p>{character.name}</p>
      </NavContainer>
      <CardContainer>
        <CardImg>
          <img src={character.img} alt={character.name} />
        </CardImg>
        <CardContent>
          <h1>{character.name}</h1>
          <p>
            Birthday: <span>{character.birthday}</span>
          </p>
          <p>
            Occupation:{" "}
            {character.occupation.map((occupation) => (
              <span>
                {occupation},<br />
              </span>
            ))}
          </p>
          <p>
            Status:
            <Dot color={character.status === "Alive" ? "green" : character.status === "Deceased" ? "red" : "gray"}></Dot>
            <span>{character.status}</span>
          </p>
          <p>
            Nickname: <span>{character.nickname}</span>
          </p>
          <p>
            Appearance: <span>{character.appearance.join(", ")}</span>
          </p>
          <p>
            Portrayed: <span>{character.portrayed}</span>
          </p>
          <NavLink to="/">
            <GiReturnArrow />
            Back
          </NavLink>
        </CardContent>
      </CardContainer>
    </>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  background-color: #363636;
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 10px;
  gap: 10px;

  a {
    text-decoration: none;
  }

  a,
  span,
  p {
    color: lime;
    font-size: 1.3rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    border-bottom: solid 1px;
  }
`;

const CardContainer = styled.section`
  background-color: #363636;
  border-radius: 10px;
  display: grid;
  margin: 20px 10px;
  gap: 20px;
  padding: 10px;

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 2fr;
    width: 80%;
    margin: 20px auto;
  }
`;

const CardImg = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const CardContent = styled.div`
  padding: 0 0 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    color: lime;
    margin-bottom: 10px;
    border-bottom: solid 1px;
  }

  p {
    color: green;
    font-size: 1.2rem;
    font-weight: 700;
  }

  span {
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.3rem;
    margin-top: 20px;
    color: lime;
  }
`;

const Dot = styled.span`
  display: inline-block;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${(p) => {
    return p.color;
  }};
`;
