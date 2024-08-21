import { useParams } from "react-router-dom"
import GlobalStyle, { Section } from "./styles"
import Title from "./components/Title"
import { Container } from "./styles"
import Search from "./Container/Search"
import {  Name } from "./Container/Search/style"
import { Label } from "./components/Label"
import Types from "./Container/Types"

function Home() {
    const { name } = useParams()

    return (
        <Container>
            <Section>
                <GlobalStyle />
                <Title>Bem vindo(a) treinador(a) <br /> <Name>{name}!</Name> </Title>
                <img src={'/images/pokedex.gif'} />
                <Label>Qual Pokémon gostaria de estudar hoje?</Label>
                <Search />
                <Types/>
            </Section>
        </Container>
    )
}
export default Home


