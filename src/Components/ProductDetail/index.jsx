import { useContext } from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import "./styles.css"
import { ShopingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShopingCartContext)
    console.log("Product to show: ", context.productToShow)

    return (
        <aside 
        className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 bg-white border border-lime-500 rounded-lg`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-md">Detail</h2>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 text-blue-500 cursor-pointer"
                    onClick={() => context.closeProductDetail()}
                    />
                </div>
            </div>

            <figure className="p-6">
                <img className="w-full h-full rounded-lg" src={context.productToShow.image} alt={context.productToShow.title} />
            </figure>

            <p className="flex flex-col object-center items-center font-normal text-black text-center p-6">
            <span className="font-bold text-md">{context.productToShow.title}</span>
                <span className="text-lime-500 font-bold text-2xl">$ {context.productToShow.price}</span>
                <img className="w-full h-full object-cover" src="https://boosterfashion.myshopify.com/cdn/shop/files/trust-badge_560x.png?v=1676354680" alt="guarantee" />
                <span className="text-sm">{context.productToShow.description}</span>
            </p>
        </aside>
    )
}


export default ProductDetail