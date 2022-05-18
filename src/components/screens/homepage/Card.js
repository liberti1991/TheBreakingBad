import { useMemo } from "react";
import styled from "styled-components";

export const Card = ({ character }) => {
  return (
    <>
      {character.length === 0 && (
        <ContainerLoading>
          <Loading>
            <div></div>
            <div></div>
            <div></div>
            <span>Loading...</span>
          </Loading>
        </ContainerLoading>
      )}
      {useMemo(() => {
        return character.map((character) => {
          return (
            <ConteinerCard>
              <h5>{character.name}</h5>
              <Flip>
                <div className="front">
                  <img src={character.img} alt={character.alt} />
                </div>
                <div className="back">
                  <Content>
                    <p>Occupation: <br /> {character.occupation.map((item) => <span>{item}, <br /></span>)}</p>
                    <p>Appearance: <br /> <span>{character.appearance.join(', ')}</span></p>
                    <p>Birthday: <span>{character.birthday}</span></p>
                    <p>Status: 
                      <Dot color={character.status === "Alive" ? "green" : character.status === "Deceased" ? "red" : "gray" }></Dot>
                      <span>{character.status}</span>
                    </p>
                    <p>Nickname: <span>{character.nickname}</span></p>
                    <p>Portrayed: <span>{character.portrayed}</span></p>
                  </Content>
                </div>
              </Flip>
            </ConteinerCard>
          );
        });
      }, [character])}
    </>
  );
};

const ContainerLoading = styled.div`
  margin: 120px auto 300px;
  
  @media screen and (min-width: 648px) {
    grid-column: 1 / span 5;
  }
`;

const Loading = styled.div`
  width: 120px;
  height: 75px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  span {
    font-size: 22px;
    text-transform: uppercase;
    margin: auto;
  }

  div {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: lime;
    animation: bounce 0.5s alternate infinite;

    :nth-child(2) {
      animation-delay: 0.16s;
    }

    :nth-child(3) {
      animation-delay: 0.32s;
    }

    @keyframes bounce {
      from {
        transform: scaleX(1.25);
      }
      to {
        transform: translateY(-50px) scaleX(1);
      }
    }
  }
`;

const ConteinerCard = styled.div`
  h5 {
    padding: 10px 0;
    color: #7ffc00;
  }
`;

const Flip = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 350px;
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
    padding: 10px 20px;
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
    img{
      height: 300px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 20px;
  
  p{
    font-weight: 700;
    span{
      color: #7ffc00;
      font-weight: 500;
      font-size: .9rem;
    }
  }
  @media screen and (min-width: 1200px) {
    gap: 10px;
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