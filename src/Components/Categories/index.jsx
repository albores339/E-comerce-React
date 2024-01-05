import React from "react"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShopingCartContext } from "../../Context"

const Categories = () => {
    const context = useContext(ShopingCartContext)
    return(
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 max-w-screen-lg p-2 sm:mb-60">
            <NavLink 
            to='/clothes'
            className="relative"
            onClick={() => {context.handleScrollToTop(); context.setSearchByCategory("men's clothing")}} >
                <figure className="w-full">
                <img className="h-full object-cover" src="https://boosterfashion.myshopify.com/cdn/shop/collections/teen_520x.png?v=1676277656" alt="" />
                <p className="absolute left-2 bottom-2 text-white text-4xl font-semibold">
                    Clothes
                </p>
                </figure>
            </NavLink>
            
            <NavLink 
            to='/electronics'
            className="relative"
            onClick={() => {context.handleScrollToTop(); context.setSearchByCategory("electronics")}} >
                <figure className="sm:h-full">
                <img className="h-full object-cover" src="https://cdn.pixabay.com/photo/2022/10/09/12/41/dji-mini-7509051_640.jpg" alt="" />
                </figure>
                <p className="absolute left-2 bottom-2 text-white text-4xl font-semibold">
                    Electronics
                </p>
            </NavLink>

            <NavLink 
            to='/jewelery'
            className="relative"
            onClick={() => {context.handleScrollToTop(); context.setSearchByCategory("jewelery")}} >
                <figure className="sm:h-full">
                <img className="h-full object-cover" src="https://cdn.pixabay.com/photo/2016/02/02/15/54/jewellery-1175530_1280.jpg" alt="" />
                </figure>
                <p className="absolute left-2 bottom-2 text-white text-4xl font-semibold">
                    Jewerely
                </p>
            </NavLink>
        </div>
    )
}

export default Categories