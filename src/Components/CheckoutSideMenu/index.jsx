import { useContext } from "react"
import { Link } from "react-router-dom"
import { XMarkIcon, BanknotesIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"
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
        context.setSearchByTitle()
    }

    const emptyCart = () => {
        if (context.cartProducts.length === 0){
            return (
                <div className="flex flex-col items-center w-full my-6 text-stone-400">
                    <ShoppingBagIcon className="w-40 h-40"/>
                    <p>
                        <span className="text-xl">Your cart is empty</span>
                    </p>
                    <button onClick={context.closeCheckoutSideMenu} className="bg-sky-400 rounded-lg p-2 text-white m-4 w-60 font-bold">Check out our offering</button>
                </div>
            )
        } else {
            return (
                <div className="flex flex-col h-full">
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
                <div className="flex flex-col px-6 bg-white w-full absolute bottom-0">
                    <p className="flex">
                        <span>Total:</span>
                        <span className=" font-bold text-xl px-4">${totalPrice(context.cartProducts).toFixed(2)}</span>
                    </p>
                    <Link to="/my-orders/last">
                    <button className="bg-lime-500 my-4 text-white rounded-lg flex flex-row p-2 gap-3 justify-center w-full" onClick={handdleCheckout}><BanknotesIcon className="w-5 h-6" />Checkout</button>
                    </Link>
                </div>
        </div>
        )
        }
    } 

    return (
        <div className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} flex items-center content-center justify-center fixed right-0 left-0 top-0 bottom-0 bg-stone-600/40 w-100vh h-100 z-20`}>
            <aside 
            className={`flex flex-col fixed checkout-side-menu bg-white border border-sky-400 rounded-lg text-stone-700 z-10 shadow-2xl`}
                    >
                <div className="flex justify-between items-center p-3">
                    <h2 className="font-medium text-xl pt-4">My Cart</h2>
                    <XMarkIcon 
                    className="h-6 w-6 text-red-500 cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()}
                />
                </div>
                {emptyCart()}
            </aside>
        </div>
        
    )
    
}


export default CheckoutSideMenu