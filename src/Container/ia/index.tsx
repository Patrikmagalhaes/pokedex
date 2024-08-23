import { GoogleGenerativeAI } from "@google/generative-ai"
import { Box } from "../Type/style";
import { useEffect, useState } from "react";
import styled from "styled-components";


type Type = {
    pokemonName: string
}

const Description = styled(Box)`
text-transform: none;
font-family: monospace,sans-serif;
`
function Ia({ pokemonName }: Type) {

    const [description, setDescription] = useState<string>()

    useEffect(() => {

        const fetchApi = async () => {
            const API_KEY = 'AIzaSyC-iDwzRLjuzq7EeH6c2HTjOVzLUXRIWTo'
          
            const genAI = new GoogleGenerativeAI(API_KEY);
            const prompt = `Crie uma descrição resumida do pokemon ${pokemonName}`
            console.log(pokemonName)
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            console.log(text);
            setDescription(text)
        }
        if (pokemonName) {
            fetchApi()
        }

    }, [pokemonName])




    return (
        <Description>
            <p >{description ? description: "Gerando Descrição..." }</p>
        </Description>

    );





} export default Ia