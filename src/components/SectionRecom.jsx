import Streamer from "./Streamer"

export default function SectionRecom(){
    return(
        <section className="flex flex-col gap-3">
            <h4 className="font-semibold">CANALES RECOMENDADOS</h4>
            <Streamer name="kingsleague" live counter="1000" img="https://static-cdn.jtvnw.net/jtv_user_pictures/881bf9b5-a6bb-419a-950a-b15a36e0dd0e-profile_image-70x70.png"/>
            <Streamer name="SizeMatters" img="https://static-cdn.jtvnw.net/jtv_user_pictures/02a8e35c-44e1-4a7d-a9c9-8d4393bf78bb-profile_image-70x70.png"/>
            <Streamer name="infrecuentes" live counter="350" img="https://static-cdn.jtvnw.net/jtv_user_pictures/c0bd6ebd-f616-4274-a167-69b1c5357ad8-profile_image-70x70.png"/>
        </section>
    )
}