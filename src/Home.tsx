import { useParams } from "react-router-dom"
import GlobalStyle, { Section } from "./styles"
import { Container } from "./styles"
import Search from "./Container/Search"
import Types from "./Container/Types"
import Chat from "./Container/Chat"


function Home() {
  const {name} = useParams()

    return (
        <Container>
            <Section>
                <Chat nameUser={name}/>
                <GlobalStyle />
             
          
                <Search />
                <Types/>
            </Section>
        </Container>
    )
}
export default Home


