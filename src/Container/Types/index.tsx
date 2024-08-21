import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Img, Item, NamePokemon, Ul } from "../Search/style";
import styled from "styled-components";

type Pokemon = {
    name: string;
    url: string;
    sprites: Sprites;
    id: number;
};

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

background-color:${({ active }) => (active ? '#eb01016e' : 'transparent')};
border: 1px solid #bfbfbf;
width:100px;
height:100px;
box-shadow: 2px  2px black;
       
`

function Types() {
    const { name } = useParams();
    const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);
    const [renderURL, setRenderURL] = useState<Pokemon[]>([]);
    const [valueBtn, setValueBtn] = useState<number>()
    const [type, setType] = useState('5')
    // Obtendo a lista de pokémons do tipo fogo e setando em `pokemons`
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
            setType('11')
        } else if (e === 1) {
            setType('10')
        }
    }
    return (


        <>
            Categorias

            {
                [{ id: 0, url: '/images/water.png', title: "Água" },
                { id: 1, url: '/images/fire.png', title: "Fogo" }, { id: 2, url: '/images/water.png', title: "Água" }].map((item) => (
                    <div style={{ display: "flex", }}>
                        <ButtonType
                            active={item.id === valueBtn}
                            onClick={() => insertValue(item.id)}
                        >




                            <img style={{ width: "50%", }} src={item.url} />

                            <p>{item.title}</p>


                        </ButtonType>
                    </div>
                ))
            }

            <Ul>

                {renderURL.length > 0 ? renderURL.map((item) => (
                    <Link to={`/home/${name}/details/${item.id}`} key={item.id}>
                        <Item>
                            <Img src={item.sprites.other.showdown.front_default} alt={item.name} />
                            <NamePokemon>{item.name}</NamePokemon>
                        </Item>
                    </Link>
                )) : (

                    <>

                        <div> <Item>
                            <Img src={'/images/loader.gif'} />
                            <NamePokemon>Calma ai...</NamePokemon>
                        </Item>
                        </div>
                        <div> <Item>
                            <Img src={'/images/loader.gif'} />
                            <NamePokemon>Calma ai...</NamePokemon>
                        </Item>
                        </div>
                        <div> <Item>
                            <Img src={'/images/loader.gif'} />
                            <NamePokemon>Calma ai...</NamePokemon>
                        </Item>
                        </div>
                    </>
                )}
            </Ul>
        </>
    );
}

export default Types
