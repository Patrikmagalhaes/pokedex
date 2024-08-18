import { ImgRounded } from "../../components/ImgRounded";
import { Pokemon } from "../../Details";
import { Section } from "../../styles";
import { Name } from "../Search/style";


type ArrayProps = {
    arrayPokemon: Pokemon[];
};

function Perfil({ arrayPokemon }: ArrayProps) {

    return (

        <>
            {arrayPokemon.map((item) =>

                <Section>
                    <ImgRounded style={{ backgroundColor: "white", width: "200px" }} src={item.sprites.other['official-artwork'].front_default} />
                    <Name>{item.name}</Name>
                </Section>


            )}
        </>


    )

}

export default Perfil


