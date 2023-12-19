import Streamer from "./Streamer"

const streamerObject = [
    {
        name:"MoureDev",
        live: true,
        counter:500,
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/ad09ba87-0247-43ef-a8c8-5f489a8ab103-profile_image-70x70.png"
    },
    {
        name:"Kodemia_mx",
        live:false,
        counter:"",
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/c57ad6e8-ac8b-436f-a3a2-2f3c9b0e03ad-profile_image-70x70.png",
    },
    {
        name:"midudev", 
        live:true,
        counter:600,
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/5a72c3d9-424a-40a6-bf23-73370cd85578-profile_image-70x70.png"
    },
    {
        name:"GuillermoRodas", 
        live:false,
        counter:"",
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/7a35133a-9e11-4892-a74c-9443ea7d07f4-profile_image-70x70.png"
    },
    {
        name:"GataShrodinger", 
        live:true,
        counter:700,
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/37f6f22a-f854-4fbb-a679-6508e9df2c2b-profile_image-70x70.png"
    }
]

export default function SectionFollow(){
    return(
        <section className="flex flex-col gap-3">
            <h4 className="font-semibold">CANALES QUE SIGUES</h4>

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

            {/* <Streamer name="MoureDev" live counter="500" img="https://static-cdn.jtvnw.net/jtv_user_pictures/ad09ba87-0247-43ef-a8c8-5f489a8ab103-profile_image-70x70.png"/>
            <Streamer name="Kodemia_mx" img="https://static-cdn.jtvnw.net/jtv_user_pictures/c57ad6e8-ac8b-436f-a3a2-2f3c9b0e03ad-profile_image-70x70.png"/>
            <Streamer name="midudev" live counter="600" img="https://static-cdn.jtvnw.net/jtv_user_pictures/5a72c3d9-424a-40a6-bf23-73370cd85578-profile_image-70x70.png"/> */}