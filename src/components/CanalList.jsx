import SectionFollow from "./SectionFollow"
import SectionRecom from "./SectionRecom"

export default function CanalList(){
    return(
        <aside className="bg-[#1f1f23] p-4 flex flex-col   ">
            <div className="flex justify-between mb-2">
                <h3 className="text-[20px] ">Para ti</h3>
                <img src="./src/assets/flechamenu.svg" alt="" />
            </div>
            <SectionFollow/>
            <SectionRecom/>
        </aside>
    )
}