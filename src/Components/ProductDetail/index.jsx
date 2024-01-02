import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { StarIcon, UserIcon, ChevronLeftIcon } from "@heroicons/react/24/solid"
import { ShopingCartContext } from "../../Context"
import Layout from "../Layout"

const ProductDetail = () => {
const context = useContext(ShopingCartContext)
    console.log("Product to show: ", context.productToShow)

const addProductsToCart = (productAdd) => {
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productAdd])
    context.openCheckoutSideMenu()
    console.log("CART", context.cartProducts)
    }

    return (
        <Layout>
            <div 
            className="flex-col max-w-screen-lg mt-3 text-stone-700"
            >
                <div className="flex justify-between items-center p-6 font-normal">
                    <h2>Product Detail</h2>
                    <NavLink to="/">
                    <div className="flex flex-row items-center cursor-pointer">
                        <ChevronLeftIcon className="h-6 w-6"/>Back
                    </div>
                    </NavLink>
                    
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between text-stone-700">
                <figure className="p-8 w-96">
                    <img className="w-full object-cover rounded-lg" src={context.productToShow.image} alt={context.productToShow.title} />
                </figure>

                <p className="flex flex-col object-center font-normal mx-8 mb-8 w-4/5 md:w-3/5 gap-3">
                    <span className="font-bold text-4xl">{context.productToShow.title}</span>
                    <div className="flex flex-row">
                        <span className="flex flex-row items-center">{context.productToShow.rating.rate} <StarIcon className="h-4 w-4 "/></span>
                        <span className="mx-4  flex flex-row items-center">{context.productToShow.rating.count} <UserIcon className="h-4 w-4 "/></span>
                    </div>                    
                    <span className="text-lime-500 font-bold text-3xl">$ {context.productToShow.price}</span>
                    <button className="bg-lime-500 rounded-lg text-white animate-bounce p-1" onClick={() => addProductsToCart(context.productToShow)}>Add to Cart</button>
                    <button className="bg-lime-500 rounded-lg text-white p-1">Buy Now</button>
                    <img className="w-96" src="https://boosterfashion.myshopify.com/cdn/shop/files/trust-badge_560x.png?v=1676354680" alt="guarantee" />
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