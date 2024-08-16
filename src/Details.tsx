import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalStyle, { Container } from "./styles"
import Header from "./Container/Header"
import Pokemons from "./components/Pokemons"


function Details() {


    return (

        <Container>
            <GlobalStyle />
            <Header />
            <Pokemons/>
        </Container>

    )


}

export default Details