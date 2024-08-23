import { GoogleGenerativeAI } from "@google/generative-ai"
import { Box } from "../Type/style";
import { useEffect, useState } from "react";


type Type = {
    pokemonName: string
}

function Ia({ pokemonName }: Type) {

    const [description, setDescription] = useState<string>()

    useEffect(() => {

        const fetchApi = async () => {
            const API_KEY = 'AIzaSyC-iDwzRLjuzq7EeH6c2HTjOVzLUXRIWTo'
            // Access your API key as an environment variable (see "Set up your API key" above)
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
        <Box>
            <p >{description ? description: "Gerando Descrição..." }</p>
        </Box>

    );





} export default Ia