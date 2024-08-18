import { Box } from "../Type/style";

type Map = {
    arrayPokemon: [];
    idPokemon: number;
    name: string;
    sprites: string;
    other: [],
    weight:number
}

function Pounds({ arrayPokemon }: Map) {

    return (

        <>
            {arrayPokemon.map((item: Map) =>

                <Box>
                 
               <ul>
                <h4>Peso</h4>
                <p>KG: {parseInt(item.weight /  2.2)}</p>
               </ul>
                 
                </Box>
            )}
        </>


    )

}

export default Pounds


