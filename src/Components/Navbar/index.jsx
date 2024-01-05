import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon, Bars3Icon, CubeIcon, CogIcon } from "@heroicons/react/24/solid"
import { ShopingCartContext } from "../../Context"

const Navbar = () => {
    const context = useContext(ShopingCartContext)
    const activeStyle = "underline underline-offset-4"
    
    return (
        <nav id="nav" className="bg-sky-500/90 backdrop-blur-md text-white flex justify-between items-center fixed z-10 top-0 w-full py-2.5 px-8 text-sm font-light">
            <ul className="flex sm:hidden w-8 h-8 text-white"
            onClick={context.openMobileMenu}>
                <li className="flex sm:hidden w-8 h-8 text-white">
                    <Bars3Icon />
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-2xl">
                    <NavLink 
                        to='/'
                        onClick={() => context.setSearchByCategory(null)}>
                        Shopi
                    </NavLink>
                </li>
                <li className="hidden sm:block">
                    <NavLink 
                        to='/clothes'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        }
                        onClick={() => context.setSearchByCategory("men's clothing")} >
                        Clothes
                    </NavLink>
                </li>
                <li className="hidden sm:block">
                    <NavLink 
                        to='/electronics'
                        className={({ isActive })=>
                                isActive ? activeStyle : undefined
                        } 
                        onClick={() => context.setSearchByCategory("electronics")}>
                        Electronics
                    </NavLink>
                </li>
                <li className="hidden sm:block">
                    <NavLink 
                        to='/jewelery'
                        className={({ isActive })=>
                                isActive ? activeStyle : undefined
                        } 
                        onClick={() => context.setSearchByCategory("jewelery")}>
                        Jewelery
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-white/60 hidden lg:block">
                        jalbores339@gmail.com
                </li>
                <li className="hidden sm:block">
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } 
                        onClick={context.handleScrollToTo}>
                        <p className="flex items-center gap-1">
                            <CubeIcon className="h-4 w-4 text-white" mx-1 /> My Orders
                        </p>
                    </NavLink>
                </li>
                <li className="hidden sm:block">
                    <NavLink 
                        to='/my-account'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } 
                        onClick={context.handleScrollToTo}>
                        <p className="flex items-center gap-1">
                            <CogIcon className="h-4 w-4 text-white" mx-1 /> My Account
                        </p>
                        
                    </NavLink>
                </li>
                <li className="hidden sm:block">
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } 
                        onClick={context.handleScrollToTo}>
                        Sing In
                    </NavLink>
                </li>
                <li className={`${context.isCheckoutSideMenuOpen ? " " : "animate-pulse "}flex flex-row items-center cursor-pointer text-xl`} onClick={context.openCheckoutSideMenu}>
                    <ShoppingCartIcon class="h-8 w-8 text-white mx-1" />{context.cartProducts?.length}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 