import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../layout/Button";
import { Input } from "../layout/Input";

export const HomePage = ({ characters, loadMore, showButton, AllItems }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const filteredCharacters = !!search
    ? AllItems.filter((AllItems) => {
        return AllItems.name.toLowerCase().includes(search.toLowerCase());
      })
    : characters;

  return (
    <>
      <Input onChange={handleChange} value={search} placeholder={"Type your search"} />
      <Container>
        {filteredCharacters.map(({ char_id, name, img }) => {
          return (
            <List key={char_id}>
              <li><h5>{name}</h5></li>
              <li><NavLink to={char_id.toString()}><img src={img} alt={name} /></NavLink></li>
            </List>
          );
        })}
      </Container>
      {!search && !showButton ? <Button loadMore={loadMore} text={"Load more characters"} /> : null}
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
    font-size: 1.2rem;
    padding: 10px 0;
    color: #7ffc00;
  }

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  @media screen and (min-width: 1200px) {
    h5 {
      font-size: 0.9rem;
    }

    img {
      height: 300px;
    }
  }
`;
