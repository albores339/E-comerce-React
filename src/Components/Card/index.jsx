import { useContext } from "react"
import { ShopingCartContext } from "../../Context"

const Card = ( data ) => {
    const context = useContext(ShopingCartContext)

    return (
        <div className="shadow-lg bg-gradient-to-r from-cyan-100 cursor-pointer w-full h-56 rounded-lg my-6">
            <figure className="flex justify-center center relative mb-2 w-full h-3/4 bg-white">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-5.5 font-light">{data.data.category}</span>
                <img className=" h-full object-cover rounded-lg" src={data.data.image} alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 bg-lime-500 bg-gradient-to-r from-lime-400 to-lime-500 hover:from-pink-400 hover:to-pink-600 text-white font-bold"
                onClick={() => context.setCount(context.count + 1)}>+</div>
            </figure>

            <p className="flex justify-between px-2 py-2">
                <span className="text-sm font-light text-black">{data.data.title}</span>
                <span className="text-xs font-bold text-lime-500 m-px">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card