import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { FaceCard, Img, Name, NamePokemon, Ul } from "../Search/style"
import styled from "styled-components"
import { Card } from "../../components/Card";
import LoadingCard from "../LoadingCard";

type Pokemon = {
    name: string;
    url: string;
    sprites: Sprites;
    id: number;
    types: Type[]
};
type Type = {
    type: { name: string }
}
type Sprites = {
    other: {
        showdown: {
            front_default: string;
        };
    };
};

type PokemonTypeResponse = {
    pokemon: { pokemon: { name: string; url: string } }[];
};

const ButtonType = styled.button<{ active: boolean }>`

background-color: ${({ active }) => (active ? '#eb01016e' : 'white')};
border:none;
padding:6px;
box-shadow: 3px  3px black;
       display:flex;
       flex-direction:column;
       justify-content:end;
       align-items:center;
       min-width:80px;
`
export const UType = styled(Ul)`
gap:16px;
justify-content:space-between;
`

const types = [
    { id: 0, url: '/images/water.png', title: "Água", },
    { id: 1, url: '/images/fire.png', title: "Fogo" },
    { id: 2, url: '/images/bug.png', title: "Inseto" },
    { id: 3, url: '/images/poison.png', title: "Venenoso" },
]

function Types() {
    const { name } = useParams();
    const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);
    const [renderURL, setRenderURL] = useState<Pokemon[]>([]);
    const [valueBtn, setValueBtn] = useState<number>(0)
    const [type, setType] = useState('11')

    useEffect(() => {
        const fetchTypeData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
                const data: PokemonTypeResponse = await response.json();
                setPokemons(data.pokemon.map((p) => p.pokemon)); // extraindo corretamente o array `pokemon`
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
            }
        }

        fetchTypeData();
    }, [type]);

    // Obtendo detalhes dos pokémons e setando em `renderURL`
    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const promises = pokemons.map(async (poke) => {
                    const response = await fetch(poke.url);
                    return await response.json();
                });

                const pokemonDetails = await Promise.all(promises);
                setRenderURL(pokemonDetails);
            } catch (error) {
                console.error("Erro ao buscar os detalhes dos pokémons:", error);
            }
        };

        if (pokemons.length > 0) {
            fetchPokemonDetails();
        }
    }, [pokemons]);
    const insertValue = (e: number) => {
        setValueBtn(e)
        if (e === 0) {
            //agua
            setType('11')
        } else if (e === 1) {
            //fogo
            setType('10')
        } else if (e === 2) {
            //inseto
            setType('7')
        } else if (e === 3) {
            //venenoso
            setType('4')
        }
    }
    return (
        <>
            <Name>Categorias</Name>
            <UType>
                {
                    types.map((item) => (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <ButtonType
                                active={item.id === valueBtn}
                                onClick={() => insertValue(item.id)}
                            >

                                <div style={{ width: "40px", height: "40px" }}>
                                    <img style={{ width: "100%", objectFit: "cover" }} src={item.url} />
                                </div>
                                <p style={{ paddingTop: "6px" }}>{item.title}</p>


                            </ButtonType>
                        </div>
                    ))
                }
            </UType>



            {renderURL.length === 0 ? <Ul><a><LoadingCard /></a></Ul> : (

                <Ul>
                    {renderURL.map((item) => (
                        <Link  to={`/home/${name}/details/${item.id}`} key={item.id}>
                            <Card key={item.id}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "end", width: "100%", alignItems: "center" }}>
                                    <div style={{ border: "1px solid #0000002e", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <FaceCard>
                                      <Img src={item.sprites.other.showdown.front_default } />
                                        
                                        </FaceCard>
                                    </div>
                                    <div style={{ width: "100%", overflowX: "hidden" }}>
                                        <NamePokemon>{item.name}</NamePokemon>
                                        <p style={{ fontSize: "16px", fontWeight: "400" }} >Tipo</p>

                                        { <p style={{ fontSize: "12px" }}>{item.types[0].type.name} </p> }
                                        { <p style={{ fontSize: "12px" }}>{item.types[1] && item.types[1].type.name}</p> }
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </Ul>
            )}

        </>
    );
}

export default Types
