import { InputName } from "../Welcome"
import { useState, useEffect } from "react"
import { FaceCard, Img, NamePokemon, Ul } from "./style";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import LoadingCard from "../LoadingCard";

type Pokemon = {
    name: string;
    url: string;
    sprites: Sprites;
    id: number;
    types: Type[]

}
type Type = {
    type: { name: string }
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
                id: 6,
                types: []
            },
            {
                name: 'caterpie',
                url: 'https://pokeapi.co/api/v2/pokemon/482/',
                sprites: { other: { showdown: { front_default: '' } } },
                id: 482,
                types: []
            },
            {
                name: 'caterpie',
                url: 'https://pokeapi.co/api/v2/pokemon/24/',
                sprites: { other: { showdown: { front_default: '' } } },
                id: 24,
                types: []
            },
            {
                name: 'caterpie',
                url: 'https://pokeapi.co/api/v2/pokemon/15/',
                sprites: { other: { showdown: { front_default: '' } } },
                id: 15,
                types: []
            }
        ])
    }
        , [])
    return (
        <>
            <InputName placeholder="Ex: Pikachu" type="text" value={namePokemon} onChange={insertName} />


            {renderURL.length === 0 ? <LoadingCard />: (

                <Ul>
                    {renderURL.map((item) => (
                        <Link to={`/home/${name}/details/${item.id}`} key={item.id}>
                            <Card key={item.id}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "end", width: "100%", alignItems: "center" }}>
                                    <div style={{ border: "1px solid #0000002e", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <FaceCard>
                                            <Img src={item.sprites.other.showdown.front_default} />
                                        </FaceCard>
                                    </div>
                                    <div style={{ width: "100%", overflowX: "hidden" }}>
                                        <NamePokemon>{item.name}</NamePokemon>
                                        <p style={{ fontSize: "16px", fontWeight: "400" }} >Tipo</p>

                                        <p style={{ fontSize: "12px" }}>{item.types[0].type.name} </p>
                                        <p style={{ fontSize: "12px" }}>{item.types[1] && item.types[1].type.name}</p>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </Ul>
            )}

        </>
    )
}

export default Search
