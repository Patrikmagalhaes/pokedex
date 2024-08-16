import styled from "styled-components";

export const Ul = styled.ul`
display:flex;
gap:10px;
overflow-x:auto;
padding:20px;
width:100%;
`
export const Item = styled.li`
display:flex;
flex-direction:column;
justify-content:end;
align-items:center;
border:1px solid black;
padding:16px;
box-shadow: 2px  2px black;
min-width:25%
@media (max-width: 600px) {
   min-width: 100%;
  }

`
export const Img = styled.img`
width:100px;
Object-fit:scale-down;
`
export const Name = styled.h3`
color:#EC2739;
text-transform:capitalize;
`