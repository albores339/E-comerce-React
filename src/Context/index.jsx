import { createContext, useState, useEffect } from "react";

export const ShopingCartContext = createContext()

export const ShopingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

    // Get Products
    const [items, setItems] = useState(null) 
    const [filteredItems, setFilteredItems] = useState(null) 

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
    }, [])

    // Get Products
    const [searchByTitle, setSearchByTitle] = useState(null) 
    console.log(searchByTitle)

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

        console.log("filteredItems: ", filteredItems)
  

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
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems
        }}>
        {children}
        </ShopingCartContext.Provider>
    )
}