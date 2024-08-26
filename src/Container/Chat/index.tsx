import { GoogleGenerativeAI } from "@google/generative-ai"
import { useState } from "react"
import { NameUser } from "./style"
const API_KEY = 'AIzaSyC-iDwzRLjuzq7EeH6c2HTjOVzLUXRIWTo'
const genAI = new GoogleGenerativeAI(API_KEY)
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Você é um assistente IA chamado Pikachu, especializado em ajudar os usuários da Pokédex a encontrar informações sobre Pokémon e outros assuntos relacionados ao universo Pokémon. Responda em primeira pessoa de forma amigável e precisa, sempre disposto a ajudar com entusiasmo. Não use o termo 'pika', em portugues é perjorativo "
})
const chat = model.startChat({
    history: []
})
type Type = {
    nameUser?: string
}

export default function Chat({ nameUser }: Type) {

    const [text, setText] = useState<string>('')
    const [resultText, setResultText] = useState<string>('')
  
    async function iniciarChat(prompt: string) {
        console.log('iniciarChat ===============')

        let result = await chat.sendMessage(prompt)
        setResultText(result.response.text())
    }

    return (
        <>
            <div style={{ boxShadow: "12.5px 12.5px 10px rgba(0, 0, 0, 0.07),100px 100px 80px rgba(0, 0, 0, 0.035)", border: "1px solid #E5E7EB", borderRadius: "20px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "yellow", marginTop: "8px" }}>
                <div >
                    <h1 style={{ padding: "16px", textAlign: "center", fontSize: "32px", }}>Olá <NameUser>{nameUser}!</NameUser> <br /> faça uma pergunta</h1>
                    <div style={{ margin: "16px", borderRadius: "20px", boxShadow: "2.5px 2.5px 10px yellow", display: "flex", justifyContent: "center" }}>
                        <img style={{ width: "60%", padding: "16px" }} src={'/images/pikachi.gif'} />
                    </div>
                </div>
                <div style={{ padding: "16px", overflowY: "auto", maxHeight: "500px" }}>
                    <p style={{ fontFamily: "monospace", fontSize: "26px", padding: "16px", boxShadow: "2.5px 2.5px 10px yellow", border: "1px solid #E5E7EB", lineHeight: "1", borderRadius: "20px", backgroundColor: "white" }}>
                        {resultText ? resultText : "Olá! 👋 Sou o Pikachu, seu guia para o mundo Pokémon! 😄 O que você gostaria de saber hoje? ✨ "}
                    </p>
                </div>
                <form style={{ display: "flex", gap: "8px", padding: "16px" }}>
                    <input required value={text} style={{ fontSize: "22px", padding: "12px", width: "70%", borderRadius: "20px", boxShadow: "2.5px 2.5px 10px yellow", border: "1px solid #E5E7EB" }} onChange={(e) => setText(e.target.value)} type="text" />
                    <button style={{ backgroundColor: "white", border: "none", borderRadius: "100%", width: "50px", boxShadow: "2.5px 2.5px 10px yellow" }} onClick={(e) => { if (text) { iniciarChat(text); e.preventDefault(); setText('') } }}><img style={{ maxWidth: "20px" }} src={'/images/send.png'} /></button>
                </form>
            </div>
        </>)
}