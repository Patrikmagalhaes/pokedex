import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    }

    body{
    font-family: monospace, sans-serif;
    box-sizing: border-box;
    
    }

    a{
    text-decoration:none;
    color: black;}
`

export default GlobalStyle

export const Container = styled.div`
  max-width: 1024px;
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


`;