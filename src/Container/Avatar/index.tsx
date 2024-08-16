import { Img, Name } from "../../Container/Search/style"
type Map = {
  
    arrayPokemon: [];
    idPokemon: number;
    name: string;
    sprites: string;
    other:unknown
}
function Avatar({ arrayPokemon }: Map) {

    return (

        <>
            {arrayPokemon.map((item: Map) =>

                <ul>
                    <Img src={item.sprites.other.showdown.front_default} />
                    <Name>{item.name}</Name>
                
                </ul>


            )}
        </>


    )

}

export default Avatar


