import { useContext } from "react"
import { ShopingCartContext } from "../../Context"

const Layout = ( { children } ) => {
    const context = useContext(ShopingCartContext)
    return (
        <div className={`${context.searchByCategory === null ? "mb-10" : "sm:mb-72"} flex flex-col items-center mt-10 text-stone-700 font-bold text-lg`}>
            { children }
        </div>
        
    )
}

export default Layout