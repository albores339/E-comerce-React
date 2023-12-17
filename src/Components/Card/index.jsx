import { useContext } from "react"
import { PlusIcon } from "@heroicons/react/24/solid"
import { ShopingCartContext } from "../../Context"

const Card = ( data ) => {
    const context = useContext(ShopingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (productAdd) => {
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productAdd])
        console.log("CART", context.cartProducts)
    }
    
    const description = (data) => {
        let desctiprionArray = data.title.split(" ")
        let description = desctiprionArray.slice(0,3)
        return description.join(" ")
    }

    return (
        <div 
        className="shadow-lg bg-gradient-to-r from-cyan-100 cursor-pointer w-full h-56 rounded-lg my-6"
        onClick={() => showProduct(data)}>
            <figure className="flex justify-center center relative mb-2 w-full h-3/4 bg-white">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-5.5 font-light">{data.category}</span>
                <img className=" h-full object-cover rounded-lg" src={data.image} alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 bg-lime-500 bg-gradient-to-r from-lime-400 to-lime-500 hover:from-pink-400 hover:to-pink-600 text-white font-bold"
                onClick={() => addProductsToCart(data)}><PlusIcon/></div> 
            </figure>

            <p className="flex justify-between px-2 py-2">
                <span className="text-sm font-light text-black">{description(data)}...
                </span>
                <span className="text-xs font-bold text-lime-500 m-px">${data.price}</span>
            </p>
        </div>
    )
}

export default Card