import { ImgRounded } from "../../components/ImgRounded";
import { Name } from "../../components/Name";
import { Pokemon } from "../../Details";
import { Section } from "../../styles";



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


