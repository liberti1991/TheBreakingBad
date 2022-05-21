import styled from "styled-components";

export const Button =({loadMore,text}) => {
  return <MyButton onClick={loadMore}>{text}</MyButton>
}

const MyButton = styled.button`
  margin: 20px 0 30px;
  padding: 12px 30px;
  font-weight: 600;
  color: lime;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #033024;
  box-shadow: #034e24 4px 4px 0;
  transition: transform 200ms, box-shadow 200ms;

  :active{
    transform: translateY(4px) translateX(4px);
    box-shadow: #034e24 0 0 0;
  }
`;