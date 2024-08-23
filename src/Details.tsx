import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalStyle, { Container, Section } from "./styles"
import Header from "./Container/Header"
import Type from "./Container/Type"
import Stats from "./Container/Stats"
import Perfil from "./Container/Perfil"
import Angles from "./Container/Angles"
import Pounds from "./Container/Pounds"
import Ia from "./Container/ia"

type Stat = {
    base_stat: number;
    stat: {
        name: string;
    };
};

type Sprites = {
    other: {
        showdown:
        {
            front_default: string;
            back_default: string;
        },
        'official-artwork': {
            front_default: string;
        }
    }
};

type TypeInfo = {
    type: {
        name: string;
    };
};

export type Pokemon = {
    id: number;
    name: string;
    sprites: Sprites;
    stats: Stat[];
    types: TypeInfo[];
    weight: number;
};






function Details() {

    const { id } = useParams()
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [nameP, setNamePokemon] = useState<string>('')
 
    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setPokemons([data])
            setNamePokemon(data.name)
        }
        fetchApi()

    }, [])
    return (

        <Container>
            <GlobalStyle />
            <Section>
                <Header />
                <Perfil arrayPokemon={pokemons} />
                <Ia pokemonName={nameP} />
                <Angles arrayPokemon={pokemons} />
                <Type arrayPokemon={pokemons} />
                <Stats arrayPokemon={pokemons} />
                <Pounds arrayPokemon={pokemons} />
            </Section>
        </Container>

    )


}

export default Details

