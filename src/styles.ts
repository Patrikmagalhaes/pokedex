import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    }

    body{
    font-family: monospace, sans-serif;
    box-sizing: border-box;
    background-color: #ffefd5;
   
    }

    a{
    text-decoration:none;
    color: black;}

    li{
    list-style:none;
    }

`

export default GlobalStyle

export const Section = styled.div`
max-width: 764px;
  width: 90%;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  gap:12px;

 @media (min-width:765px) {
   max-width:600px;
  }
 @media (max-width:765px) {
   max-width:400px;
  }
`
export const Container = styled.div`
  width:100vw;

  
display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
`;