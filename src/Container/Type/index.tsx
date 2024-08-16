import { Box } from "./style";

type Map = {
    arrayPokemon: [];
    idPokemon: number;
    name: string;
    sprites: string;
    other: unknown;
    types: [];
}
function Type({ arrayPokemon }: Map) {

    return (

        <>
            <Box>
                {arrayPokemon.map((item: Map) =>

                    <ul>
                       <h3>Tipo</h3>
                        <li>{item.types[0].type.name}</li>
                    </ul>
                )}
            </Box>
        </>


    )

}

export default Type


