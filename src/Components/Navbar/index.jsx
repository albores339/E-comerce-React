import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { ShopingCartContext } from "../../Context"

const Navbar = () => {
    const context = useContext(ShopingCartContext)
    const activeStyle = "underline underline-offset-4"
    
    return (
        <nav className="bg-sky-500/90 backdrop-blur-md text-white flex justify-between items-center fixed z-10 top-0 w-full py-2.5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink 
                        to='/all'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } >
                        All
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink 
                        to='/clothes'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } >
                        Clothes
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink 
                        to='/electronics'
                        className={({ isActive })=>
                                isActive ? activeStyle : undefined
                        } >
                        Electronics
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink 
                        to='/furniture'
                        className={({ isActive })=>
                                isActive ? activeStyle : undefined
                        } >
                        Furniture
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink 
                        to='/toys'
                        className={({ isActive })=>
                        isActive ? activeStyle : undefined
                } >
                        Toys
                    </NavLink>
                </li>
                <li className="hidden md:block">
                    <NavLink 
                        to='/others'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-white/60">
                        jalbores339@gmail.com
                </li>
                <li className="hidden lg:block">
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } >
                        My Orders
                    </NavLink>
                </li>
                <li className="hidden lg:block">
                    <NavLink 
                        to='/my-account'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } >
                        My Account
                    </NavLink>
                </li>
                <li className="hidden lg:block">
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } >
                        Sing In
                    </NavLink>
                </li>
                <li className={`${context.isCheckoutSideMenuOpen ? " " : "animate-pulse "}flex flex-row items-center cursor-pointer`} onClick={context.openCheckoutSideMenu}>
                    <ShoppingCartIcon class="h-6 w-6 text-white mx-1" />{context.count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 