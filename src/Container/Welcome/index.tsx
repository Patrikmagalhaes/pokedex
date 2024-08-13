import styled from 'styled-components'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'
import { SetStateAction, useState } from 'react'

export const InputName = styled.input`
  padding:16px;
  width:60%;
  border: 2px solid
`

const Button = styled.button`
  font-family: "Pixelify Sans", sans-serif;
  width:80%;
  padding:16px;
  font-size:24px;
  font-weight: bold;
  margin-top:24px;
  background-color:#EC2739;
  box-shadow: 2px  2px black;
`

function Welcome() {
    const [name, setName] = useState('')

    const insertName = (e: { target: { value: SetStateAction<string> } }) => {

        setName(e.target.value)
    }

    return (
        <>
            <img className='img' src="../../public/images/picachu.png" alt="pikachu" />
            <Title>Hello! My name is Pikachu!</Title>
            <Paragrafo>Qual seu nome?</Paragrafo>
            <InputName value={name} onChange={insertName} placeholder='Ex: Patrik' type='text' />
            <Button><Link to={`/home/${name}`}>Start!</Link></Button>

        </>
    )
}

export default Welcome