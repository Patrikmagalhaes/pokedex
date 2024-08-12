import { useParams } from "react-router-dom"
import GlobalStyle from "./styles"
import Title from "./components/Title"
import { Container } from "./styles"
import Search from "./Container/Search"


function Home() {
    const { name } = useParams()

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


