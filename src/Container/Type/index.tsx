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
                        <li>{item.types[0].type.name}</li>
                    </ul>
                   </>
                )}
            </Box>
        </>


    )

}

export default Type


