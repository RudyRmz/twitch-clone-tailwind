import SectionFollow from "./SectionFollow"
import SectionRecom from "./SectionRecom"

export default function CanalList(){
    return(
        <aside className="bg-[#1f1f23] p-4 gap-12 flex flex-col ">
            <SectionFollow/>
            <SectionRecom/>
        </aside>
    )
}