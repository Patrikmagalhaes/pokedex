import styled from "styled-components";
import { Name } from "../../components/Name";

export const Ul = styled.ul`
display:flex;
overflow-x:auto;
scroll-behavior: smooth;

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
