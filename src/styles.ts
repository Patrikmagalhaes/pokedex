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

export const Container = styled.div`
  max-width: 764pxpx;
  width: 100%;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  gap:12px;
  padding:24px;
 

  img{
  max-width:500px;
  width:100%
  }

 @media (min-width:765px) {
   max-width:600px;
  }
 @media (max-width:765px) {
   max-width:400px;


  }

  

`;