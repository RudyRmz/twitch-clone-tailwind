
export default function NavBar(){
    return(
        <nav className="bg-[#18181a] h-[50px] flex-row gap-[20px] p-[20px] font-bold items-center text-white">
            <img className="w-7" src="https://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png" alt="" />
            <div className="font-bold hover:text-purple-400 hover:cursor-pointer">Siguiendo</div>
            <div className="font-bold hover:text-purple-400 hover:cursor-pointer">Explorar</div>
        </nav>
    )
}