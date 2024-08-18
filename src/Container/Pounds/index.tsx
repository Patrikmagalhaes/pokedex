import { Pokemon } from "../../Details";
import { Box } from "../Type/style";


type ArrayProps = {
    arrayPokemon: Pokemon[]
}
function Pounds({ arrayPokemon }: ArrayProps) {

    return (

        <>
            {arrayPokemon.map((item) =>

                <Box key={item.weight}>

                    <ul>
                        <h4>Peso</h4>
                        <p>KG: {(item.weight / 2.2).toFixed(2)}</p>
                    </ul>

                </Box>
            )}
        </>


    )

}

export default Pounds


