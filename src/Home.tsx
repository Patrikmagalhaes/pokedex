import { useParams } from "react-router-dom"
import GlobalStyle from "./styles"
import Title from "./components/Title"
import { Container } from "./styles"
import Search from "./Container/Search"
import { useEffect } from "react"

function Home() {
    const { name } = useParams()

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1000000')
            .this((res: object) => res.J)
    }, [])

    return (

        <Container>
            <GlobalStyle />
            <Title>Bem vindo(a) treinador(a) {name}! </Title>
            <p>Qual Pokémon gostaria de estudar hoje?</p>
            <Search />
        </Container>


    )

}

export default Home