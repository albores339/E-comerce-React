import { useContext } from "react"
import { Link } from "react-router-dom"
import { XMarkIcon, BanknotesIcon } from "@heroicons/react/24/solid"
import { ShopingCartContext } from '../../Context'
import OrderCard from "../OrderCard"
import { totalPrice } from "../../utils"
import "./styles.css"


const CheckoutSideMenu = () => {
    const context = useContext(ShopingCartContext)
    
    const handleDelete = (index) => {        
        const updatedCartProducts = [...context.cartProducts];
        updatedCartProducts.splice(index, 1);
        context.setCartProducts(updatedCartProducts);
        context.setCount(updatedCartProducts.length);
    };

    const handdleCheckout = () => {
        const orderToAdd = {
            date: "01.02.23",
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
        context.closeCheckoutSideMenu()
    }

    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex-col fixed right-0 bg-white border border-sky-400 rounded-lg text-stone-700 z-10`}
        >
            <div className="flex justify-between items-center p-3">
                <h2 className="font-medium text-md ">My Order</h2>
            <div>
                <XMarkIcon 
                    className="h-6 w-6 text-red-500 cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()}
                    />
            </div>
            </div>
            <div className="overflow-y-scroll flex-1">
                {
                    context.cartProducts.map((product, index) =>(< OrderCard 
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        index={index}
                        handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6 mb-6">
                    <p className="px-6">
                        <span>Total:</span>
                        <span className=" font-bold text-xl px-4">${totalPrice(context.cartProducts).toFixed(2)}</span>
                    </p>
                    <Link to="/my-orders/last">
                    <button className="bg-lime-500 m-2 text-white rounded-lg flex flex-row p-2 gap-3 justify-center w-full mb-10" onClick={handdleCheckout}><BanknotesIcon className="w-5 h-6" />Checkout</button>
                    </Link>
                </div>
        </aside>
    )
    
}


export default CheckoutSideMenu