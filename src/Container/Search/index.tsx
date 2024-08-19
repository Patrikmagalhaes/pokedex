import { InputName } from "../Welcome"
import { useState, useEffect } from "react"
import { Img, Item, NamePokemon, Ul } from "./style";
import { Link, useParams } from "react-router-dom";

type Pokemon = {
    name: string;
    url: string;
    sprites: Sprites;
    id: number;
}

type Sprites = {
    other: {
        showdown: {
            front_default: string;
        }
    }
}
function Search() {
    const { name } = useParams()
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
        for (i = 0; i <= 20; i++) {
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
                console.log(data)
             
            }
            fetchApi()
        })
    }, [filterResult])

    useEffect(() => {
        setFilterResult([
            {
                name: 'caterpie',
                url: 'https://pokeapi.co/api/v2/pokemon/6/',
                sprites: { other: { showdown: { front_default: '' } } },
                id: 10
            },
            {
                name: 'caterpie',
                url: 'https://pokeapi.co/api/v2/pokemon/482/',
                sprites: { other: { showdown: { front_default: '' } } },
                id: 10
            },
            {
                name: 'caterpie',
                url: 'https://pokeapi.co/api/v2/pokemon/24/',
                sprites: { other: { showdown: { front_default: '' } } },
                id: 10
            },
            {
                name: 'caterpie',
                url: 'https://pokeapi.co/api/v2/pokemon/15/',
                sprites: { other: { showdown: { front_default: '' } } },
                id: 15
            }
      ])
    }
        , [])
    return (
        <>
            <InputName placeholder="Ex: Pikachu" type="text" value={namePokemon} onChange={insertName} />
            <Ul>
                {renderURL.map((item) =>
                    <Link to={`/home/${name}/details/${item.id}`}>
                        <Item key={item.id}>
                            <Img src={item.sprites.other.showdown.front_default} />
                            <NamePokemon>{item.name}</NamePokemon>
                        </Item>
                    </Link>
                )}
            </Ul>
        </>
    )
}

export default Search
