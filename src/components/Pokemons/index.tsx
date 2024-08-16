import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Pokemon } from "../../Container/Search"
import { Img, Name } from "../../Container/Search/style"


function Pokemons() {

    const { id } = useParams()
    const [details, setDetails] = useState<Pokemon[]>([])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setDetails([data])
            console.log(data)
        }
        fetchApi()

    }, [id])

    return (
        <>
            {details.map((item) =>

                <>
                    <Img src={item.sprites.other.showdown.front_default} />
                    <Name>{item.name}</Name>
                </>

            )}

        </>
    )

}

export default Pokemons