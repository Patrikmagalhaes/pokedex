import { ImgRounded } from "../../components/ImgRounded";
import { Section } from "../../styles";
import { Name } from "../Search/style";
type Map = {

    arrayPokemon: [];
    idPokemon: number;
    name: string;
    sprites: string;
    other: [];

}
function Perfil({ arrayPokemon }: Map) {

    return (

        <>
            {arrayPokemon.map((item: Map) =>

                <Section>
                    <ImgRounded style={{ backgroundColor: "white", width: "200px" }} src={item.sprites.other['official-artwork'].front_default} />
                    <Name>{item.name}</Name>
                </Section>


            )}
        </>


    )

}

export default Perfil


