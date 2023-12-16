

export default function CategoryCard (props){
    let classnames = "m-[5px] max-w-[250px] relative"
    
    if(props.preorder === true){
        classnames += " preorder"
    }

    return(
        <article className={classnames}>
            <img className="w-screen h-[60%]" src= {props.image} alt="juegito de Zelda" />
            {props.nuevo === true && <div class="absolute top-0 right-0 p-[1px 10px] text-white bg-[#ff75e6] rounded ">Nuevo</div>}
            
            <div>
            <h3 className="font-semibold">{props.title}</h3>
            <p>{props.espectadores} espectadores</p>
            {/* {props.preorder === true && <p>Pre-order</p>} */}
            {/* {props.preorder === true ? <p>Pre-order</p> : <p>No esta en Pre-order</p>} */}
            <p>
            {props.preorder === true && "Pre-order"}
            {props.offer === true && "Offer"}
            </p>
            <p>{props.price}</p>
            </div>
        </article>
    )
}