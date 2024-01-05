import { createContext, useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";

export const ShopingCartContext = createContext()

export const ShopingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    
  // Get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items ? items.slice(0, 6) : [];
    }
  }
  
  useEffect(() => {
    console.log("items: ", items)
    console.log(searchByCategory)
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProducDetailOpen] = useState(false)
    const openProductDetail = () => setIsProducDetailOpen(true)
    const closeProductDetail = () => setIsProducDetailOpen(false)

    // Product Detail - Only Left
    const [left, setLeft] = useState(17);
    const reStartLeft = () => {
      setLeft(17)
    }

    useEffect(() => {
      const intervalId = setInterval(() => {
        setLeft((prevCount) => {
          if (prevCount === 10) {
            return prevCount - 1;
          }if (prevCount > 2) {
            return prevCount - 1;
          } else {
            clearInterval(intervalId);
            return prevCount;
          }
        });
      }, 5000);
    
        return () => clearInterval(intervalId);
      }, []); 
    
  
    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Mobile Menu - Open/Close
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const openMobileMenu = () => setIsMobileMenuOpen(true)
    const closeMobileMenu = () => setIsMobileMenuOpen(false)

    // Product Detail - Show product

    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart - Add products to cart

    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
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
        filteredItems,
        setFilteredItems,
        searchByTitle,
        setSearchByTitle,
        searchByCategory,
        setSearchByCategory,
        left,
        setLeft,
        reStartLeft,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu,
        handleScrollToTop
        }}>
        {children}
        </ShopingCartContext.Provider>
    )
}