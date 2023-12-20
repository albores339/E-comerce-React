import { useContext } from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { ShopingCartContext } from '../../Context'
import "./styles.css"

const CheckoutSideMenu = () => {
    const context = useContext(ShopingCartContext)

    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex-col fixed right-0 bg-white border border-lime-500 rounded-lg`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-md">My Order</h2>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 text-blue-500 cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()}
                    />
                </div>
            </div>
        </aside>
    )
}


export default CheckoutSideMenu