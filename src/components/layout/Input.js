import styled from "styled-components";

export const Input = ({ placeholder, onChange, value }) => {
  return (
    <INPUT
      onChange={onChange}
      value={value}
      type="search"
      placeholder={placeholder}
    />
  );
};

const INPUT = styled.input`
  padding: 5px 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  width: 95%;
  @media screen and (min-width: 1200px) {
    width: 100%;
    
  }
`;