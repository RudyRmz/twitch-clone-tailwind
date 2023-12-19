import Streamer from "./Streamer"

const streamerObject = [
    {
        name:"kingsleague", 
        live: true,
        counter:1000, 
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/881bf9b5-a6bb-419a-950a-b15a36e0dd0e-profile_image-70x70.png",
    },
    {
        name:"SizeMatters", 
        live: false,
        counter:"",
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/02a8e35c-44e1-4a7d-a9c9-8d4393bf78bb-profile_image-70x70.png"
    },
    {
        name:"infrecuentes", 
        live: true,
        counter:350,
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/c0bd6ebd-f616-4274-a167-69b1c5357ad8-profile_image-70x70.png"
    },
    {
        name:"ElChiringuitoTV", 
        live: true,
        counter:1500,
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/a9ccf7f1-7473-4fd0-916c-38a14c294795-profile_image-70x70.png"
    },
    {
        name:"theglasscannon", 
        live: true,
        counter:104,
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/d7552503-5ef8-48d8-8e79-31d6b01fcf69-profile_image-70x70.png"
    }
]

export default function SectionRecom(){
    return(
        <section className="flex flex-col gap-3">
            <h4 className="font-semibold">CANALES RECOMENDADOS</h4>

            {streamerObject.map((streamer)=>{
                return (
                    <Streamer 
                    key={streamer.name}
                    name= {streamer.name}
                    img={streamer.img}
                    live={streamer.live}
                    counter={streamer.counter}
                    />
                )
            })}
        </section>
    )
}

            {/* <Streamer name="kingsleague" live counter="1000" img="https://static-cdn.jtvnw.net/jtv_user_pictures/881bf9b5-a6bb-419a-950a-b15a36e0dd0e-profile_image-70x70.png"/>
            <Streamer name="SizeMatters" img="https://static-cdn.jtvnw.net/jtv_user_pictures/02a8e35c-44e1-4a7d-a9c9-8d4393bf78bb-profile_image-70x70.png"/>
            <Streamer name="infrecuentes" live counter="350" img="https://static-cdn.jtvnw.net/jtv_user_pictures/c0bd6ebd-f616-4274-a167-69b1c5357ad8-profile_image-70x70.png"/> */}

            {/* {streamerObject.map((streamer)=>{
                return <p>{streamer.name}</p>
            })} */}