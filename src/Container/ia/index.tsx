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
            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
                systemInstruction: "Você é um assistente, especializado em ajudar os usuários(as) da Pokédex a encontrar informações sobre Pokémon e outros assuntos relacionados ao universo Pokémon. Responda em primeira pessoa de forma amigável e precisa, sempre disposto a ajudar com entusiasmo."
            });

            const prompt = `Crie uma descrição resumida do pokemon ${pokemonName}`

            const result = await model.generateContentStream(prompt);
            let fullText = ''

            for await (const chunk of result.stream) {

                const chunkText = chunk.text();
                fullText = fullText += chunkText
                setDescription(fullText)
            }

        }
        if (pokemonName) {
            fetchApi()
        }

    }, [pokemonName])




    return (
        <Description>
            <p >{description != undefined ? description && description : "Gerando Descrição..."}</p>
        </Description>
    );





} export default Ia