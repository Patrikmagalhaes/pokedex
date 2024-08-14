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
    const [namePokemon, setNamePokemon] = useState('')
    const [filterResult, setFilterResult] = useState<Pokemon[]>([])
    const [renderURL, setRenderURL] = useState<Pokemon[]>([])

    let arrayPokemon: Pokemon[] = []

    //obtendo lista de pokemons [{nome} {url}] e setando em pokemons
    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000000')
            const data = await response.json()
            setPokemons(data.results)

        }
        fetchApi()

    }, [])

    //obtem o valor filtrado e seta no estado filterResult
    const insertName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setNamePokemon(inputValue)

        const result = filterItems(namePokemon)
        let list = []

        let i = 0
        for (i = 0; i <= 9; i++) {
            list.push(result[i])
        }

        setFilterResult(list)

    }

    //filtra a lista do estado pokemons com base no valor digitado no input
    const filterItems = (query: string) => {
        return pokemons.filter(
            (el) => el.name.indexOf(query.toLowerCase()) > -1)
    }

    useEffect(() => {
        filterResult.map((urls) => {
            const fetchApi = async () => {
                const response = await fetch(`${urls.url}`)
                const data = await response.json()
                arrayPokemon.push(data)
                setRenderURL(arrayPokemon)

            }
            fetchApi()

        })

    }, [filterResult])
    useEffect(() => {


        setFilterResult([{
            name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/',
            sprites: "",
            other: undefined,
            showdown: "",
            front_default: "",
        }, {
            name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/',
            sprites: "",
            other: undefined,
            showdown: "",
            front_default: ""
        }])

    }, [])
    return (
        <>
            <InputName type="text" value={namePokemon} onChange={insertName} />
            {renderURL.map((item) =>
                <li key={item.id} >
                    {item.name}
                    <img style={{ width: '50px' }} src={item.sprites.other.showdown.front_default} />
                </li>
            )}
        </>
    )
}

export default Search
