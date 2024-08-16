import { Box } from "../Type/style";

type Map = {

    arrayPokemon: [];
    idPokemon: number;
    name: string;
    sprites: string;
    other: unknown;
    stats: [];
    base_stat: number;
}
function Stats({ arrayPokemon }: Map) {

    return (

        <Box>
            <h3>Estatisticas</h3>
            <ul>
                {arrayPokemon.map((item: Map) =>

                    <>
                        <li>
                            <p>Hp: {item.stats[0].base_stat}</p>
                        </li>

                        <li>
                            <p>Attack: {item.stats[1].base_stat}</p>
                        </li>
                        <li>
                            <p>Defesa: {item.stats[2].base_stat}</p>
                        </li>
                        <li>
                            <p>Velocidade: {item.stats[5].base_stat}</p>
                        </li>
                    </>

                )}
            </ul>
        </Box>

    )

}

export default Stats


