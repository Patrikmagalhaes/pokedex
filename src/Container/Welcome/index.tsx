import styled from 'styled-components'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Section } from '../../styles'

export const InputName = styled.input`
  padding:16px;
  width:50%;
 background-color:yellow;
  box-shadow: 2px  2px black;
`

export const Button = styled.button`
  font-family: "Pixelify Sans", sans-serif;
  width:80%;
  padding:16px;
  font-size:24px;
  font-weight: bold;
  margin-top:24px;
  background-color:#EC2739;
  box-shadow: 2px  2px black;
`

export const BackButton = styled(Button)`
  font-size:16px;
  width:auto;
  padding:8px;
  margin:0;
`
export const Form = styled.form`
  display:flex;
  align-items:center;
  flex-direction:column;
  max-width:500px;
  width:100%;
`
export const ImgWelcome = styled.img`
max-width:400px;
width:100%;
`
function Welcome() {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const insertName = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value)
  }

  const handleStartClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name.trim() != '') {
      navigate(`/home/${name}`)
    }
  }

  return (
    <Container>
      <Section>
        <ImgWelcome className='img' src="/images/picachu.png" alt="pikachu" />
        <Title>Hello! My name is Pikachu!</Title>
        <Paragrafo>Qual seu nome?</Paragrafo>

        <Form onSubmit={handleStartClick}>
          <InputName value={name} onChange={insertName} placeholder='Ex: Patrik' type='text' required />
          <Button type='submit'>Start!</Button>
        </Form>
      </Section>
    </Container>
  )
}

export default Welcome
