import { InputName } from "../Welcome"
import { useState, useEffect } from "react"

interface Pokemon {
    name: string;
    url: string;
    sprites: string;
    other: undefined;
    showdown: string;
    front_default: string;
}

function Search() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [name, setName] = useState('')
    const [filterResult, setFilterResult] = useState<Pokemon[]>([])
    const [renderURL, setRenderURL] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000000')
            const data = await response.json()
            setPokemons(data.results)

        }
        fetchApi()
    }, [])


    const insertName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        const result = filterItems(name)
        setFilterResult(result)
        const [{ url }] = filterResult
        console.log(url)

    }

    const filterItems = (query: string) => {
        return pokemons.filter(
            (el) => el.name.indexOf(query.toLowerCase()) > -1
        )
    }

    useEffect(() => {
        const fetchApi = async () => {
            const [{ url }] = filterResult
            console.log(url)
            const response = await fetch(`${url}`)
            const data = await response.json()
            const array= data.push(array)
            setRenderURL([data].push(data) )

        }

        fetchApi()
    })

    return (
        <>
            <InputName type="text" value={name} onChange={insertName} />
            {renderURL.map((pokemon: Pokemon) =>
                <li >
                    {pokemon.name}
                    <img style={{ width: '50px' }} src={pokemon.sprites.other.showdown.front_default} alt="" />
                </li>
            )}
        </>
    )
}

export default Search