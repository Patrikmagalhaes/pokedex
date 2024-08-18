import { Pokemon } from "../../Details";
import { Box } from "../Type/style";


type StatsProps = {
    arrayPokemon: Pokemon[];
};

function Stats({ arrayPokemon }: StatsProps) {
    return (
        <Box>
            <h3>Estatísticas</h3>
            <ul>
                {arrayPokemon.map((item) => (
                    <>
                        {item.stats.map((stat, index) => (
                            <li key={index}>
                                <p>{stat.stat.name}: {stat.base_stat}</p>
                            </li>
                        ))}
                    </>
                ))}
            </ul>
        </Box>
    );
}

export default Stats;
