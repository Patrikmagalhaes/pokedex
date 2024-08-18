import { Img, Name } from "../../Container/Search/style"



type Sprites = {
    other: {
        showdown:
        {
            front_default: string;
        }
    }
}

type Pokemon = {
    idPokemon: number;
    name: string;
    sprites: Sprites;
};


type ArrayProps = {
    arrayPokemon: Pokemon[];
};
function Avatar({ arrayPokemon }: ArrayProps) {

    return (

        <>
            {arrayPokemon.map((item) =>

                <ul>
                    <Img src={item.sprites.other.showdown.front_default} />
                    <Name>{item.name}</Name>

                </ul>


            )}
        </>


    )

}

export default Avatar


