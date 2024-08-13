import { InputName } from "../Welcome"
import { useState, useEffect } from "react"

interface Pokemon {
    name: string;
}

function Search() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [name, setName] = useState('')
    const insertName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        filterItems(name)

    }

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000000')
            const data = await response.json();
            setPokemons(data.results)

        }
        fetchApi()
    }, [])

    const filterItems = (query: string) => {
        return pokemons.filter(
            (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1
        )
    }



    return (
        <>
            <InputName type="text" value={name} onChange={insertName} />
        </>
    )
}

export default Search