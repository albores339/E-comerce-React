import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CogIcon, XMarkIcon, CubeIcon } from "@heroicons/react/24/solid"
import { ShopingCartContext } from "../../../Context"

const MobileMenu = () => {
    const context = useContext(ShopingCartContext)
    const activeStyle = "underline underline-offset-4"
    
    return (
        <nav className={`${context.isMobileMenuOpen ? "flex" : "hidden"} sm:hidden bg-sky-600/90 backdrop-blur-md text-white flex flex-col fixed z-20 top-0 w-full h-full py-10 px-8 gap-4 font-bold text-2xl`}>
            <XMarkIcon className="absolute top-6 right-6 h-8 w-8" onClick={context.closeMobileMenu} />
            <ul className="flex flex-col gap-3">
                <li className="">
                    <NavLink 
                        to='/clothes'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        }
                        onClick={() => {context.setSearchByCategory("men's clothing"), context.closeMobileMenu()}} >
                        Clothes
                    </NavLink>
                </li>
                <li className="">
                    <NavLink 
                        to='/electronics'
                        className={({ isActive })=>
                                isActive ? activeStyle : undefined
                        } 
                        onClick={() => {context.setSearchByCategory("electronics"), context.closeMobileMenu()}}>
                        Electronics
                    </NavLink>
                </li>
                <li className="">
                    <NavLink 
                        to='/jewerly'
                        className={({ isActive })=>
                                isActive ? activeStyle : undefined
                        } 
                        onClick={() => {context.setSearchByCategory("jewelery"), context.closeMobileMenu()}}>
                        Jewerly
                    </NavLink>
                </li>
            </ul>

            <hr className="my-4"/>

            <ul className="flex flex-col gap-3">
                <li className="text-white/60"
                onClick={context.closeMobileMenu}>
                        jalbores339@gmail.com
                </li>
                <li className="">
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } onClick={context.closeMobileMenu}>
                        <p className="flex items-center gap-1">
                            <CubeIcon className="h-6 w-6 text-white" mx-1 /> My Orders
                        </p>
                    </NavLink>
                </li>
                <li className="">
                    <NavLink 
                        to='/my-account'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } 
                        onClick={context.closeMobileMenu}>
                        <p className="flex items-center gap-1">
                            <CogIcon className="h-6 w-6 text-white" mx-1 /> My Account
                        </p>
                    </NavLink>
                </li>
                <li className=""
                onClick={context.closeMobileMenu}>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } >
                        Sing In
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu 