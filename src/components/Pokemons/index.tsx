function Pokemons() {

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setDetails(data.results)
        }
        fetchApi()

    }, [])
    return (<>
    </>)

}