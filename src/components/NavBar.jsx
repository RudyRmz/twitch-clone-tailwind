
export default function NavBar(){
    return(
        <nav className="bg-[#18181a] h-[50px] flex justify-between gap-[20px] p-[20px] font-bold items-center text-white">
            <div className="flex gap-[20px] items-center text-xl " >
                <img className="w-9" src="./src/assets/twitch.svg" alt="" />
                <a className="font-bold hover:text-purple-400 hover:cursor-pointer">Siguiendo</a>
                <a className="font-bold hover:text-purple-400 hover:cursor-pointer">Explorar</a>
            </div>

            <div>
                <input className="bg-[#18181a] border-[1px] border-[#53535f8c] rounded-md p-1 w-[350px] font-medium  " type="text" placeholder="Buscar"/>
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
                
            </div>
        </nav>
    )
}