import { createContext } from "react";
import { useState } from "react";

export let MyShop  = createContext()


export const MyShopContextProvider = ({children})=>{
     const [CartItems, setCartItems] = useState([])
  const [isCardOpen, setIsCardOpen] = useState(false)

    return <MyShop.Provider value={{isCardOpen, setIsCardOpen, CartItems, setCartItems}}>{children}</MyShop.Provider>
}