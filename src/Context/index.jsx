import { createContext, useState } from "react";

export const ShopingCartContext = createContext()

export const ShopingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

    
    // Product Detail - Opne/Close

    const [isProductDetailOpen, setIsProducDetailOpen] = useState(false)
    const openProductDetail = () => setIsProducDetailOpen(true)
    const closeProductDetail = () => setIsProducDetailOpen(false)

    // Product Detail - Show product

    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart - Add products to cart

    const [cartProducts, setCartProducts] = useState([])


    return(
        <ShopingCartContext.Provider value={{count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts
        }}>
        {children}
        </ShopingCartContext.Provider>
    )
}