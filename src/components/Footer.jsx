import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  font-family: 'Dancing Script', cursive;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -40px;
  width: 100%;
`;

export function Footer() {
  return (
    <FooterDiv>
      Built With ❤️ By &nbsp;<a target=" " href="https://satyamkumarnavneetportfolio.netlify.app/">Satyam Kumar Navneet</a>
    </FooterDiv>
  );
}
