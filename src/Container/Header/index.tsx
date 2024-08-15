import { Link, useParams } from "react-router-dom";
import Title from "../../components/Title";
import { BackButton } from "../Welcome";
import { H } from "./style";

function Header() {
    const { name } = useParams()
    return (

        <H>
            <Title>Detalhes</Title>
            <Link to={`/home/${name}`}><BackButton>Voltar</BackButton></Link>
        </H>


    )

}

export default Header