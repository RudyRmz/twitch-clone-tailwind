import CategoryCard from "./CategoryCard"

const categoryObject =[
    {
        title:"Board Games",
        espectadores:350,
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/490413-285x380.jpg",
        nuevo: true
    },
    {
        title:"Conversando",
        espectadores:450,
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
        nuevo: false
    },
    {
        title:"Eventos especiales",
        espectadores:700,
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg",
        nuevo: false
    },
    {
        title:"Talk shows y podcast",
        espectadores:"1.8k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/417752-285x380.jpg",
        nuevo: false
    },
    {
        title:"Deportes",
        espectadores:"6.4k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/518203-285x380.jpg",
        nuevo: false
    },
    {
        title:"Among Us",
        espectadores:604,
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/510218_IGDB-285x380.jpg",
        nuevo: false
    },
    {
        title:"Rust",
        espectadores:4200,
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
        nuevo: false
    },
    {
        title:"Fornite",
        espectadores:"120.6k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
        nuevo: false
    },
    {
        title:"Minecraft",
        espectadores:"91.6k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
        nuevo: false
    },
    {
        title:"The Exit 8",
        espectadores:135,
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/386303001_IGDB-285x380.jpg",
        nuevo: false
    },
    {
        title:"Dungeons & Dragons",
        espectadores:"1.4k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/509577-285x380.jpg",
        nuevo: false
    },
    {
        title:"Retro",
        espectadores:"7.6k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/27284-285x380.jpg",
        nuevo: false
    },
    {
        title:"The Finals",
        espectadores:"30.6k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/1910103699_IGDB-285x380.jpg",
        nuevo: true
    },
    {
        title:"Lethal Company",
        espectadores:"93.6k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/2085980140_IGDB-285x380.jpgg",
        nuevo: false
    },
    {
        title:"League of Legends",
        espectadores:"105k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
        nuevo: false
    },
    {
        title:"Apex Legends",
        espectadores:"30k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg",
        nuevo: false
    },
    {
        title:"Pokemon Scarlet/Violet",
        espectadores:"30k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/670867987-285x380.jpg",
        nuevo: false
    },
    {
        title:"Chess",
        espectadores:"25k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/743-285x380.jpg",
        nuevo: false
    },
    {
        title:"Clash of Clans",
        espectadores:"105k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/73914_IGDB-285x380.jpg",
        nuevo: false
    },
    {
        title:"Palia",
        espectadores:"105k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/982017546_IGDB-285x380.jpg",
        nuevo: true
    },
    {
        title:"Cyberpunck 2077",
        espectadores:"45k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/65876-285x380.jpg",
        nuevo: false
    },
    {
        title:"Cyberpunck 2077",
        espectadores:"45k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/65876-285x380.jpg",
        nuevo: false
    },
    {
        title:"Cyberpunck 2077",
        espectadores:"45k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/65876-285x380.jpg",
        nuevo: false
    },
    {
        title:"Cyberpunck 2077",
        espectadores:"45k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/65876-285x380.jpg",
        nuevo: false
    },
    {
        title:"Cyberpunck 2077",
        espectadores:"45k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/65876-285x380.jpg",
        nuevo: false
    },
    {
        title:"Cyberpunck 2077",
        espectadores:"45k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/65876-285x380.jpg",
        nuevo: false
    },
    {
        title:"Cyberpunck 2077",
        espectadores:"45k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/65876-285x380.jpg",
        nuevo: false
    },
    {
        title:"Cyberpunck 2077",
        espectadores:"45k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/65876-285x380.jpg",
        nuevo: false
    },
    {
        title:"Cyberpunck 2077",
        espectadores:"45k",
        tag:"59.99",
        image:"https://static-cdn.jtvnw.net/ttv-boxart/65876-285x380.jpg",
        nuevo: false
    },
]

export default function CategoryList(){
    return(
        <main className="bg-[#18181b] mt-7 p-4 grid lg:grid-cols-9 grid-rows-3 md:grid-cols-6 sm:grid-cols-4">

            {categoryObject.map((category)=>{
                return (
                    <CategoryCard 
                    key={category.title}
                    title= {category.title}
                    image={category.image}
                    nuevo={category.nuevo}
                    espectadores={category.espectadores}
                    />
                )
            })}
        </main>
    )
}

{/* <CategoryCard title="Board Games" espectadores="350" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/490413-285x380.jpg" nuevo/>
            <CategoryCard title="Conversando" espectadores="450" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg" />
            <CategoryCard title="Eventos especiales" espectadores="450" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg" />
            <CategoryCard title="Board Games" espectadores="350" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/490413-285x380.jpg" />
            <CategoryCard title="Conversando" espectadores="450" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg" nuevo/>
            <CategoryCard title="Eventos especiales" espectadores="450" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg" />
            <CategoryCard title="Board Games" espectadores="350" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/490413-285x380.jpg" />
            <CategoryCard title="Conversando" espectadores="450" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg" />
            <CategoryCard title="Eventos especiales" espectadores="450" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg" nuevo/>
            <CategoryCard title="Board Games" espectadores="350" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/490413-285x380.jpg" />
            <CategoryCard title="Conversando" espectadores="450" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg" nuevo/>
            <CategoryCard title="Eventos especiales" espectadores="450" tag="59.99" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg" /> */}