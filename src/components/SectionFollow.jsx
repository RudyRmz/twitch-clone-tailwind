import Streamer from "./Streamer"

export default function SectionFollow(){
    return(
        <section className="flex flex-col gap-3">
            <h4 className="font-semibold">CANALES QUE SIGUES</h4>
            <Streamer name="MoureDev" live counter="500" img="https://static-cdn.jtvnw.net/jtv_user_pictures/ad09ba87-0247-43ef-a8c8-5f489a8ab103-profile_image-70x70.png"/>
            <Streamer name="Kodemia_mx" img="https://static-cdn.jtvnw.net/jtv_user_pictures/c57ad6e8-ac8b-436f-a3a2-2f3c9b0e03ad-profile_image-70x70.png"/>
            <Streamer name="midudev" live counter="600" img="https://static-cdn.jtvnw.net/jtv_user_pictures/5a72c3d9-424a-40a6-bf23-73370cd85578-profile_image-70x70.png"/>
        </section>
    )
}