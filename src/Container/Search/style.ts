import styled from "styled-components";
import { Name } from "../../components/Name";

export const Ul = styled.ul`
display:flex;
gap:36px;
overflow-x:auto;
padding: 20px ;
width:100%;
`
export const Item = styled.li`
display:flex;
flex-direction:column;
justify-content:end;
align-items:center;
box-shadow: 6px  6px black;
background-color:white;
border-radius:10px;
overflow-x:hidden;
width:180px;
height:180px;
`
export const Img = styled.img`
Object-fit:scale-down;
max-width:100px;
width:100%;
`
export const NamePokemon = styled(Name)`
font-size:16px

`

export { Name };
