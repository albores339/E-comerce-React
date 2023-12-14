import { createContext } from "react";

const ShopingCartContext = createContext()

export const ShopingCartProvider = ({children}) => {
    return(
        <ShopingCartContext.Provider>
        {children}
        </ShopingCartContext.Provider>
    )
}