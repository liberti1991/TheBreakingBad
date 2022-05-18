import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Input } from "../layout/Input";
import { Loading } from "../layout/Loading";

export const HomePage = ({ characters }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const filteredCharacters = !!search
    ? characters.filter((characters) => {
        return characters.name.toLowerCase().includes(search.toLowerCase());
      })
    : characters;

  return (
    <>
      <Input onChange={handleChange} value={search} placeholder={"Type your search"} />
      <Container>
        <Loading characters={characters} />
        {filteredCharacters.map(({ id, name, img }) => {
          return (
            <List key={id}>
              <li>
                <h5>{name}</h5>
                <NavLink to={id.toString()}>
                  <img src={img} alt={name} />
                </NavLink>
              </li>
            </List>
          );
        })}
      </Container>
    </>
  );
};
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
  padding: 10px;
`;

const List = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;

  h5 {
    padding: 10px 0;
    color: #7ffc00;
  }

  img {
    width: 100%;
    height: 350px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media screen and (min-width: 1200px) {
    img {
      height: 300px;
    }
  }
`;
