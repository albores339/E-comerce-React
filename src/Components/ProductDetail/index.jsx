import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { StarIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { ShopingCartContext } from "../../Context"
import Layout from "../Layout"

const ProductDetail = () => {
    const context = useContext(ShopingCartContext)
    console.log("Product to show: ", context.productToShow)

    return (
        <Layout>
            <div 
            className={`${context.isProductDetailOpen ? "flex" : "hidden"} flex-col max-w-screen-lg my-6`}
            >
                <div className="flex justify-between items-center p-6">
                    <h2 className="font-medium text-md">Product Detail</h2>
                    <NavLink to="/">
                    <div>
                        <XMarkIcon 
                        className="h-6 w-6 text-blue-500 cursor-pointer"
                        />
                    </div>
                    </NavLink>
                    
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between">
                <figure className="p-6 w-96">
                    <img className="w-full object-cover rounded-lg" src={context.productToShow.image} alt={context.productToShow.title} />
                </figure>

                <p className="flex flex-col object-center font-normal text-black m-10 w-4/5 md:w-3/5 gap-3">
                    <span className="font-bold text-2xl">{context.productToShow.title}</span>
                    <span className="text-cyan-700 flex flex-row items-center">{context.productToShow.rating.rate} <StarIcon className="h-4 w-4"/></span>
                    <span className="text-lime-500 font-bold text-2xl">$ {context.productToShow.price}</span>
                    <button className="bg-lime-400 rounded lg text-white animate-bounce">Add to Cart</button>
                    <button className="bg-lime-400 rounded lg text-white">Buy Now</button>
                    <img className="object-cover" src="https://boosterfashion.myshopify.com/cdn/shop/files/trust-badge_560x.png?v=1676354680" alt="guarantee" />
                    <span className="text-sm">{context.productToShow.description}</span>
                </p>
                </div>
            </div>
        </Layout>
    )
}


export default ProductDetail