import { createContext, useState } from "react";

export const ShopingCartContext = createContext()

export const ShopingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    console.log("COUNT: ", count) 

    return(
        <ShopingCartContext.Provider value={{count,
        setCount
        }}>
        {children}
        </ShopingCartContext.Provider>
    )
}