import { createContext, useState } from "react";

export const ShopingCartContext = createContext()

export const ShopingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

    
    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProducDetailOpen] = useState(false)
    const openProductDetail = () => setIsProducDetailOpen(true)
    const closeProductDetail = () => setIsProducDetailOpen(false)

    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - Show product

    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart - Add products to cart

    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])


    return(
        <ShopingCartContext.Provider value={{count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        order,
        setOrder
        }}>
        {children}
        </ShopingCartContext.Provider>
    )
}