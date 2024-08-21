import { Li } from "../../components/Li";
import { Pokemon } from "../../Details";
import { Box } from "./style";

type Map = {
    arrayPokemon: Pokemon[];
}
function Type({ arrayPokemon }: Map) {

    return (

        <>
            <Box>
                {arrayPokemon.map((item) =>

                   <>
                    <ul>
                       <h3>Tipo</h3>
                        <Li>{item.types[0].type.name} </Li>
                        <Li>{item.types[1] && item.types[1].type.name}</Li>
                    </ul>
                   </>
                )}
            </Box>
        </>


    )

}

export default Type


