import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Img, Item, NamePokemon, Ul } from "../Search/style";
import Title from "../../components/Title";

type Pokemon = {
    name: string;
    url: string;
    sprites: Sprites;
    id: number;
};

type Sprites = {
    other: {
        showdown: {
            front_default: string;
        };
    };
};

type PokemonTypeResponse = {
    pokemon: { pokemon: { name: string; url: string } }[];
};

function Water() {
    const { name } = useParams();
    const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);
    const [renderURL, setRenderURL] = useState<Pokemon[]>([]);

    // Obtendo a lista de pokémons do tipo fogo e setando em `pokemons`
    useEffect(() => {
        const fetchTypeData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/type/11/');
                const data: PokemonTypeResponse = await response.json();
                setPokemons(data.pokemon.map((p) => p.pokemon)); // extraindo corretamente o array `pokemon`
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
            }
        };

        fetchTypeData();
    }, []);

    // Obtendo detalhes dos pokémons e setando em `renderURL`
    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const promises = pokemons.map(async (poke) => {
                    const response = await fetch(poke.url);
                    return await response.json();
                });

                const pokemonDetails = await Promise.all(promises);
                setRenderURL(pokemonDetails);
            } catch (error) {
                console.error("Erro ao buscar os detalhes dos pokémons:", error);
            }
        };

        if (pokemons.length > 0) {
            fetchPokemonDetails();
        }
    }, [pokemons]);

    return (
        <> <Title>Tipo água</Title>
            <Ul>
               
                {renderURL.map((item) => (
                    <Link to={`/home/${name}/details/${item.id}`} key={item.id}>
                        <Item>
                            <Img src={item.sprites.other.showdown.front_default} alt={item.name} />
                            <NamePokemon>{item.name}</NamePokemon>
                        </Item>
                    </Link>
                ))}
            </Ul>
        </>
    );
}

export default Water;
