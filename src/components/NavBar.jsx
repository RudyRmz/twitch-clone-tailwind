
export default function NavBar(){
    return(
        <nav className="bg-[#18181a] h-[50px] flex justify-between gap-[20px] p-[20px] font-bold items-center text-white">
            <div className="flex gap-[20px] items-center text-xl " >
                <img className="w-9" src="./src/assets/twitch.svg" alt="" />
                <a className="font-bold hover:text-purple-400 hover:cursor-pointer">Siguiendo</a>
                <a className="font-bold hover:text-purple-400 hover:cursor-pointer">Explorar</a>
                <img className="w-5" src="./src/assets/3puntos.svg" alt="" />
            </div>

            <div className="flex items-center">
                <input className="bg-[#18181a] border-[1px] border-[#53535f8c] rounded-l-md p-1 w-[350px] font-medium focus:ring focus:ring-purple-600  " type="text" placeholder="Buscar"/>
                <img className="p-2 bg-[#53535f61] rounded-r-md " src="./src/assets/lupa-1.svg" alt="" />
            </div>

            <div className="flex items-center gap-[15px]">
                <a href="">
                    <img src="./src/assets/corona.svg" alt="" />
                </a>
                <a href="">
                    <img src="./src/assets/bandeja.svg" alt="" />
                </a>
                <a href="">
                <img src="./src/assets/mensaje.svg" alt="" />
                </a>
                <a href="">
                <img src="./src/assets/diamante.svg" alt="" />
                </a>
                <div className="bg-[#53535f61] p-1 flex gap-1 rounded-[5px]">
                    <img src="./src/assets/pila.svg" alt="" />
                    <a href="">Mira sin anuncios</a>
                </div>
                <img className="rounded-[100%] w-7" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-70x70.png" alt="" />
            </div>
        </nav>
    )
}