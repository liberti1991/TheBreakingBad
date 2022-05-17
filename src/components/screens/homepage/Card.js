import { useMemo } from "react";
import styled from "styled-components";

export const Card = ({ charactes }) => {
  return (
    <>
      {useMemo(() => {
        return charactes.map((character) => {
          return (
            <ConteinerCard key={character.id}>
              <h4>{character.name}</h4>

              <Flip>
                <div className="front">
                  <img src={character.img} alt={character.alt} />
                </div>
                <div className="back">
                  <p>Occupation: {[...character.occupation]}</p>
                  <p>Appearance: {[...character.appearance]}</p>
                  <p>Birthday: {character.birthday}</p>
                  <p>Status: {character.status}</p>
                  <p>Nickname: {character.nickname}</p>
                  <p>Portrayed: {character.portrayed}</p>
                </div>
              </Flip>
            </ConteinerCard>
          );
        });
      }, [charactes])}
    </>
  );
};

const ConteinerCard = styled.div`
  h4 {
    padding: 10px 0;
    color: #6b8e23;
  }
`;

const Flip = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
  }
  .front,
  .back {
    display: block;
    transition-duration: 0.5s;
    transition-property: transform, opacity;
  }
  .front {
    transform: rotateY(0deg);
  }
  .back {
    position: absolute;
    padding: 10px;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transform: rotateY(-180deg);
  }
  &:hover {
    .front {
      transform: rotateY(0deg);
      opacity: 0.3;
    }
    .back {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
`;
