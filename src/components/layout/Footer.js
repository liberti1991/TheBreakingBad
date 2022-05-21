import styled from "styled-components";

import {BsWhatsapp} from "react-icons/bs"

export const Footer = () => {
  return (
    <Copyright>
      <a href="https://api.whatsapp.com/send?phone=5541997000028&text=Olá.%20Gostaria%20de%20fazer%20um%20projeto.%20" target="_blank" rel="noopener noreferrer" title="Whatsapp">
        © 2022 - Rodrigo Liberti.<BsWhatsapp />
      </a>
    </Copyright>
  );
};

const Copyright = styled.div`
  border-top: 1px solid gray;
  padding: 30px 0;
  a {
    color: gray;
    text-decoration: none;
    justify-content: center;
    display: flex;
    align-items: center;
    gap:10px;
    
    svg{
      width: 20px;
      height: 20px;
      color: lime;  
    }
  }
  
  @media screen and (min-width: 648px) {
    svg{
      display: none;
    }
  }
`;