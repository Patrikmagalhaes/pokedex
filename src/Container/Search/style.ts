import styled from "styled-components";

export const Ul = styled.ul`
display:flex;
width:50%;
gap:10px;
overflow-x:auto;
border:1px solid black;
padding:20px;
`
export const Item = styled.li`
display:flex;
flex-direction:column;
justify-content:end;
align-items:center;
`
export const Img = styled.img`
width:100px;
Object-fit:scale-down;
`
export const Name = styled.h3`
color:#EC2739;
text-transform:capitalize;
`