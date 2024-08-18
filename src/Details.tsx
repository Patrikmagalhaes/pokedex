import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalStyle, { Container, Section } from "./styles"
import Header from "./Container/Header"
import Avatar from "./Container/Avatar"
import Type from "./Container/Type"
import Stats from "./Container/Stats"
import Perfil from "./Container/Perfil"
import Angles from "./Container/Angles"
import Pounds from "./Container/Pounds"


function Details() {

    const { id } = useParams()
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setPokemons([data])
          
        }
        fetchApi()

    }, [])
    return (

        <Container>
            <GlobalStyle />
            <Section>
                <Header />
                <Perfil arrayPokemon={pokemons} />
                <Angles arrayPokemon={pokemons} />
                <Type arrayPokemon={pokemons} />
                <Stats arrayPokemon={pokemons} />
                <Pounds arrayPokemon={pokemons}/>
            </Section>
        </Container>

    )


}

export default Details

