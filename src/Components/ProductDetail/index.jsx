import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { StarIcon, UserIcon, ChevronLeftIcon, TruckIcon } from "@heroicons/react/24/solid"
import { ShopingCartContext } from "../../Context"
import Layout from "../Layout"
import "./styles.css"

const ProductDetail = () => {
const context = useContext(ShopingCartContext)

const addProductsToCart = (productAdd) => {
    context.setCartProducts([...context.cartProducts, productAdd])
    context.openCheckoutSideMenu()
    }
    
    const renderStars = () =>{
        if (Math.floor(parseInt(context.productToShow.rating.rate)) === 5){
        return (
            <span className="flex flex-row items-center text-stone-600 gap-1">
                {context.productToShow.rating.rate} <StarIcon className="h-4 w-4 "/> <StarIcon className="h-4 w-4 "/> <StarIcon className="h-4 w-4 "/> <StarIcon className="h-4 w-4 "/> <StarIcon className="h-4 w-4 "/> 
            </span>
            
        )
    } if(Math.floor(parseInt(context.productToShow.rating.rate)) === 4){
        return(
            <p className="flex flex-row items-center text-stone-600 gap-1">
                    <span className="text-stone-700">{context.productToShow.rating.rate}</span> <StarIcon className="h-4 w-4 "/> <StarIcon className="h-4 w-4 "/> <StarIcon className="h-4 w-4 "/> <StarIcon className="h-4 w-4 "/>
            </p>)
    } if(Math.floor(parseInt(context.productToShow.rating.rate)) === 3){
        return(
            <p className="flex flex-row items-center text-stone-600 gap-1">
                    <span className="text-stone-700">{context.productToShow.rating.rate}</span> <StarIcon className="h-4 w-4 "/> <StarIcon className="h-4 w-4 "/> <StarIcon className="h-4 w-4 "/>
            </p>)
    } if(Math.floor(parseInt(context.productToShow.rating.rate)) === 2){
        return(
            <p className="flex flex-row items-center text-stone-600 gap-1">
                    <span className="text-stone-700">{context.productToShow.rating.rate}</span> <StarIcon className="h-4 w-4 "/> <StarIcon className="h-4 w-4 "/>
            </p>)
    } if(Math.floor(parseInt(context.productToShow.rating.rate)) === 1){
        return(
            <p className="flex flex-row items-center text-stone-600 gap-1">
                    <span className="text-stone-600">{context.productToShow.rating.rate}</span> <StarIcon className="h-4 w-4 "/> 
            </p>)
    }
    }

    return (
        <Layout>
            <div 
            className="flex-col max-w-screen-lg mt-2 text-stone-700 sm:mb-56"
            >
                <div className="flex justify-between items-center p-6 font-normal">
                    <h2>Product Detail</h2>
                    <NavLink to="/">
                    <div className="flex flex-row items-center cursor-pointer">
                        <ChevronLeftIcon className="h-6 w-6"/>Back
                    </div>
                    </NavLink>
                    
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-stone-700">
                <figure className="p-10 w-96">
                    <img className="w-full object-cover rounded-lg" src={context.productToShow.image} alt={context.productToShow.title} />
                </figure>

                <p className="flex flex-col object-center font-normal mx-8 mb-8 w-4/5 md:w-3/5 gap-2">
                    <span className="font-bold text-3xl">{context.productToShow.title}</span>
                    <div className="flex flex-row">
                        {renderStars()}
                        <span className="mx-4  flex flex-row items-center gap-1">{context.productToShow.rating.count} <UserIcon className="h-4 w-4 text-stone-700"/></span>
                    </div>             
                    <span className="text-lime-500 font-bold text-3xl">$ {context.productToShow.price}</span>
                    <p className="flex gap-3 items-center">
                        <span>
                            <TruckIcon className="w-6 h-6" />
                        </span>
                         <span>
                            Free Shipping
                        </span>
                    </p>       
                    <p className="">
                        <span className="animate-pulse font-bold text-red-500">{context.left}</span>
                        <span> Left in the stock</span>
                    </p>
                    <button className="bg-lime-500 rounded-lg text-white shaky-button p-1 my-2" onClick={() => addProductsToCart(context.productToShow)}>Add to Cart</button>
                    <img className="w-96" src="https://boosterfashion.myshopify.com/cdn/shop/files/trust-badge_560x.png?v=1676354680" alt="guarantee" />
                    <span className="font-bold">Product Description</span>
                    <span className="text-sm">{context.productToShow.description}</span>
                    <div className="gap-2">
                        <span className="font-bold p-2">TAGS:</span>
                        <span className="bg-stone-200 rounded-lg p-2">{context.productToShow.category}</span>
                    </div>
                    
                </p>
                </div>
            </div>
        </Layout>
    )
}


export default ProductDetail