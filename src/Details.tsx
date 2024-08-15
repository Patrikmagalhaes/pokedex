import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalStyle, { Container } from "./styles"
import Title from "./components/Title"
import Header from "./Container/Header"


function Details() {
    const [details, setDetails] = useState()
    const { id } = useParams()

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setDetails(data.results)
        }
        fetchApi()

    }, [])

    return (

        <Container>
            <GlobalStyle />
            <Header />

        </Container>

    )


}

export default Details