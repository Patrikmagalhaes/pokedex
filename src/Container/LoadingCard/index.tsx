import { Card } from "../../components/Card";
import { FaceCard, Img, NamePokemon, Ul } from "../Search/style";

function LoadingCard() {
    return (

        <Ul>

            <a>
                <Card >
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "end", width: "100%", alignItems: "center" }}>
                        <div style={{ border: "1px solid #0000002e", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <FaceCard>
                                <Img src={'/images/loader.gif'} />
                            </FaceCard>
                        </div>
                        <div style={{ width: "100%", overflowX: "hidden" }}>
                            <NamePokemon>Calma ai...</NamePokemon>
                            <p style={{ fontSize: "16px", fontWeight: "400" }} >Aguardando...</p>

                            <p style={{ fontSize: "12px" }}>Aguardando... </p>
                            <p style={{ fontSize: "12px" }}>Aguardando...</p>
                        </div>
                    </div>
                </Card>
            </a>

            <a>
                <Card >
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "end", width: "100%", alignItems: "center" }}>
                        <div style={{ border: "1px solid #0000002e", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <FaceCard>
                                <Img src={'/images/loader.gif'} />
                            </FaceCard>
                        </div>
                        <div style={{ width: "100%", overflowX: "hidden" }}>
                            <NamePokemon>Calma ai...</NamePokemon>
                            <p style={{ fontSize: "16px", fontWeight: "400" }} >Aguardando...</p>

                            <p style={{ fontSize: "12px" }}>Aguardando... </p>
                            <p style={{ fontSize: "12px" }}>Aguardando...</p>
                        </div>
                    </div>
                </Card>
            </a>

            <a>
                <Card >
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "end", width: "100%", alignItems: "center" }}>
                        <div style={{ border: "1px solid #0000002e", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <FaceCard>
                                <Img src={'/images/loader.gif'} />
                            </FaceCard>
                        </div>
                        <div style={{ width: "100%", overflowX: "hidden" }}>
                            <NamePokemon>Calma ai...</NamePokemon>
                            <p style={{ fontSize: "16px", fontWeight: "400" }} >Aguardando...</p>

                            <p style={{ fontSize: "12px" }}>Aguardando... </p>
                            <p style={{ fontSize: "12px" }}>Aguardando...</p>
                        </div>
                    </div>
                </Card>
            </a>
        </Ul>



    )
}
export default LoadingCard