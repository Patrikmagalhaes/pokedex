import { ImgRounded } from "../../components/ImgRounded";
import { Name } from "../../components/Name";
import { Pokemon } from "../../Details";
import { Section } from "../../styles";
import { Img, Item, NamePokemon } from "../Search/style";



type ArrayProps = {
    arrayPokemon: Pokemon[];
};

function Perfil({ arrayPokemon }: ArrayProps) {

    return (

        <>
            {arrayPokemon.length > 0 ? arrayPokemon.map((item) =>

                <Section>
                    <ImgRounded style={{ backgroundColor: "white", width: "200px" }} src={item.sprites.other['official-artwork'].front_default} />
                    <Name>{item.name}</Name>
                </Section>


            ) : (<>
                <Section>
                    <ImgRounded style={{  width: "200px" }}  src={'/images/loader.gif'}/>
                    <Name>Calma ai...</Name>
                </Section>
                
            </>)}
        </>


    )

}

export default Perfil


