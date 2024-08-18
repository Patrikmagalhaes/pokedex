import styled from "styled-components";
import { Img } from "../../Container/Search/style"
import { Box } from "../Type/style";
import { Pokemon } from "../../Details";

type ArrayProps = {
    arrayPokemon: Pokemon[];
};

const BoxCenter = styled(Box)`
display: flex;
justify-content:center;
`
function Angles({ arrayPokemon }: ArrayProps) {

    return (

        <>
            {arrayPokemon.map((item) =>

                <BoxCenter>

                    <Img src={item.sprites.other.showdown.front_default} />
                    <Img src={item.sprites.other.showdown.back_default} />

                </BoxCenter>
            )}
        </>


    )

}

export default Angles


