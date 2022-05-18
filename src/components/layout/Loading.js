import styled from "styled-components";

export const Loading = () => {
  return (
    <ContainerLoading>
      <LoadingBols>
        <div></div>
        <div></div>
        <div></div>
        <span>Loading...</span>
      </LoadingBols>
    </ContainerLoading>
  );
};

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;

  @media screen and (min-width: 648px) {
    grid-column: 1 / span 5;
  }
`;

const LoadingBols = styled.div`
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
