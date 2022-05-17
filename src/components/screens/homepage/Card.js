import { useMemo } from "react";
import styled from "styled-components";

export const Card = ({ charactes }) => {
  return (
    <>
      {useMemo(() => {
        return charactes.map((character) => {
          return (
            <ConteinerCard>
              <h5>{character.name}</h5>
              <Flip>
                <div className="front">
                  <img src={character.img} alt={character.alt} />
                </div>
                <div className="back">
                  <Content>
                    <p>Occupation: <span>{[...character.occupation]}</span></p>
                    <p>Appearance: <span>{[...character.appearance]}</span></p>
                    <p>Birthday: <span>{character.birthday}</span></p>
                    <p>Status: <span>{character.status}</span></p>
                    <p>Nickname: <span>{character.nickname}</span></p>
                    <p>Portrayed: <span>{character.portrayed}</span></p>
                  </Content>
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
  h5 {
    padding: 10px 0;
    color: #7ffc00;
  }
`;

const Flip = styled.div`
  position: relative;
  img {
    width: 220px;
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
    padding: 10px 40px;
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
  @media screen and (min-width: 1200px) {
    .back {
      padding: 10px 20px ;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  
  p{
    font-weight: 700;
    span{
      color: #7ffc00;
      font-weight: 500;
      font-size: .9rem;
    }
  }
`;