// import { GoogleGenerativeAI } from "@google/generative-ai"
// import { Box } from "../Type/style";
// import { useEffect, useState } from "react";




// function Ia({ pokemonName }: unknown) {

//     const [description, setDescription] = useState<string>()

//     useEffect(() => {

//         const fetchApi = async () => {
//             const API_KEY = ''
//             // Access your API key as an environment variable (see "Set up your API key" above)
//             const genAI = new GoogleGenerativeAI(API_KEY);
//             const prompt = `Crie uma descrição resumida do pokemon ${pokemonName}`
//             const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//             const result = await model.generateContent(prompt);
//             const response = await result.response;
//             const text = response.text();
//             console.log(text);
//             setDescription(text)
//         }
//         fetchApi()

//     })




//     return (
//         <Box>
//             <p >{description }</p>
//         </Box>

//     );



//     return null

// } export default Ia