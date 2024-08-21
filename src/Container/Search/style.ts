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
justify-content:start;
align-items:center;
box-shadow: 6px  6px black;
background-color:white;
border-radius:10px;
overflow-x:hidden;
width:150px;

height:100%;
padding:8px;
`
export const FaceCard = styled.div`
width:100px;
`
export const Img = styled.img`
Object-fit:scale-down;
max-width:100px;
width:100px;
height:100px;
`
export const NamePokemon = styled(Name)`
font-size: 20px;
font-weight: 400;
white-space: nowrap;
   text-overflow: ellipsis;
`

export { Name };
