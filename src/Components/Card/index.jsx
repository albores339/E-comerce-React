import { useContext } from "react"
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid"
import { ShopingCartContext } from "../../Context"
import { Link } from "react-router-dom"

const Card = ( data ) => {
    const context = useContext(ShopingCartContext)

    const showProduct = (productDetail) => {
        context.reStartLeft()
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const renderIcon = (data) => {
        const isInCart = context.cartProducts.filter(product => product.id === data.id).length > 0
        if (isInCart) {
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center m-2 text-cyan-500"
                ><CheckCircleIcon className="bg-stone-100 rounded-full h-8 w-8"/></div> 
            )
        } else {
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center m-2 bg-lime-500 bg-gradient-to-r from-lime-400 to-lime-500 hover:from-sky-400 hover:to-sky-500 text-white text-sm rounded-lg p-1"
                >{data.rating.rate}<StarIcon className="w-3 h-3"/></div> 
            )

        }
    }

    const shortDescription = (data) => data.title.split(" ").length > 5 ? `${data.title.split(" ").slice(0, 4).join(" ")}...`
        : data.title
    
    return (
        <Link
        to="/product-detail">
             <div 
        className="shadow-md cursor-pointer w-full h-72 md:h-56 rounded-lg my-6"
        onClick={() => {context.handleScrollToTop(); showProduct(data)}}>
            <figure className="flex justify-center center relative mb-1 w-full h-3/4 bg-white">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-5.5 font-light">{data.category}</span>
                <img className="h-full object-cover rounded-lg" src={data.image} alt="headphones" />
                {renderIcon(data)}
            </figure>

            <p className="flex items-center justify-between px-2 py-1">
                <span className="text-sm text-stone-700 font-normal">{shortDescription(data)}
                </span>
                <span className="text-md font-bold text-lime-500 m-1">${data.price}</span>
            </p>
        </div>
        </Link>
    )
}

export default Card