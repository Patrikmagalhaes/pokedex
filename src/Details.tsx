import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalStyle, { Container } from "./styles"
import Header from "./Container/Header"
import Avatar from "./Container/Avatar"
import Type from "./Container/Type"
import Stats from "./Container/Stats"


function Details() {

    const { id } = useParams()
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setPokemons([data])
            console.log(data)
        }
        fetchApi()

    }, [])
    return (

        <Container>
            <GlobalStyle />
            <Header />
            <Avatar arrayPokemon={pokemons} />
            <Type arrayPokemon={pokemons} />
            <Stats arrayPokemon={pokemons} />
        </Container>

    )


}

export default Details

