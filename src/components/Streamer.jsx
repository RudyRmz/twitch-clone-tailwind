

export default function Streamer(props){
    let classnames = "flex justify-between items-center"
    
    if(!props.live){
        classnames += " " //falta el opacity
    }

    return(
        <div className= {classnames}>
            <div className="flex items-center gap-[10px] ">
            <img className="w-8 h-8 rounded-[100%]" src={props.img} alt="" />
            <p className="text-ellipsis overflow-hidden ...">{props.name}</p>
            </div>
            
            <div className="flex items-center gap-[10px] ">
            {props.live === true ? <div className="bg-red-600 rounded-[100%] w-[0.6rem] h-[0.6rem]  "></div> : <p className="text-sm">Desconectado</p>} 
            {props.counter && <p>{props.counter}</p>} 
            </div>
            
        </div>
    )
}