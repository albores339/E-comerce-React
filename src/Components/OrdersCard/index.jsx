import { CalendarIcon, ShoppingBagIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    

    return (
        <div className="flex items-center mb-3 border border-black rounded-lg p-4 w-72 md:w-96 m-4">
            <p className="flex items-center justify-between gap-4 w-full">
                <div className="flex flex-col">
                    <span className="font-light flex gap-2"><CalendarIcon className="h-6 w-6"/>01.02.2024</span>
                    <span className="font-light flex gap-2"><ShoppingBagIcon className="h-6 w-6"/>{totalProducts} articles</span>
                </div>
                
                <span className="flex  items-center font-medium text-2xl">${totalPrice} <ChevronDoubleRightIcon className="shaky-button text-lime-500 w-8 h-8"/></span>
            </p>
        </div>
    )
} 

export default OrdersCard