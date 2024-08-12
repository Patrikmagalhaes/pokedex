import { InputName } from "../Welcome"
import { useState, useEffect, SetStateAction } from "react"

function Search() {
    const [pokemons, setPokemons] = useState([])
    const [name, setName] = useState('')


    const insertName = (e: { target: { value: SetStateAction<string> } }) => {

        setName(e.target.value)
    }

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000000')
            const data = await response.json();
            setPokemons(data.results)
            console.log(data.results)
        }
        fetchApi()
    }, [])

    function filterList(i: string) {
if(pokemons != )
        return pokemons.filter((e: string) => console.log(`${+ e.indexOf(i) > -1}`))
    }
    filterList('bulb')
    return (
        <>
            <InputName value={name} onChange={insertName} />
        </>
    )
}

export default Search