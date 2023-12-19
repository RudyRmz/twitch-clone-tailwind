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
]

export default function CategoryList(){
    return(
        <main className="bg-[#18181b] p-3 grid grid-cols-9 ">

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