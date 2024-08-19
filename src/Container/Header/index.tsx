import { Link, useParams } from "react-router-dom";
import { BackButton } from "../Welcome";
import { H } from "./style";

function Header() {
    const { name } = useParams()
    return (

        <H>
            <h3>Detalhes</h3>
            <Link to={`/home/${name}`}><BackButton>Voltar</BackButton></Link>
        </H>


    )

}

export default Header