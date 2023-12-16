import NavBar from "./components/NavBar"
import CanalList from "./components/CanalList"
import CategoryList from "./components/CategoryList"

export default function App(){
  return(
    <>
    <NavBar/>
    <section className="bg-black text-white min-h-[calc(100vh-50px)] grid grid-cols-[250px_auto]">
    <CanalList/>
    <CategoryList/>
    </section>
  </>
      
  )
}

//className="grid grid-cols-[250px_auto]" estaba en el div que contiene canallist y categorylist