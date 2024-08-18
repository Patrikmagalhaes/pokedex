import styled from "styled-components";
import Title from "../../components/Title";
import { Img } from "../../Container/Search/style"
import { Box } from "../Type/style";

type Map = {
    arrayPokemon: [];
    idPokemon: number;
    name: string;
    sprites: string;
    other: []
}

const BoxCenter = styled(Box)`
display: flex;
justify-content:center;
` 
function Angles({ arrayPokemon }: Map) {

    return (

        <>
            {arrayPokemon.map((item: Map) =>

                <BoxCenter>
                 
                    <Img src={item.sprites.other.showdown.front_default} />
                    <Img src={item.sprites.other.showdown.back_default} />
                 
                </BoxCenter>
            )}
        </>


    )

}

export default Angles


