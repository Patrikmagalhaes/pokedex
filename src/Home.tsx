import { useParams } from "react-router-dom"
import GlobalStyle, { Section } from "./styles"
import Title from "./components/Title"
import { Container } from "./styles"
import Search from "./Container/Search"
import { Name } from "./Container/Search/style"


function Home() {
    const { name } = useParams()

    return (

        <Container>
            <Section>
                <GlobalStyle />
                <Title>Bem vindo(a) treinador(a) <br/> <Name>{name}!</Name>  </Title>
                <p>Qual Pokémon gostaria de estudar hoje?</p>
                <Search />
            </Section>
        </Container>

    )

}

export default Home


