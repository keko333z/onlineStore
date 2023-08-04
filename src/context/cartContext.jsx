import { createContext, useState } from "react"


export const cartContext = createContext() 

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
       
 
    const addToCart = (product) => {
        
        const prodinarray = cart.find(item => item.id === product.id)
        if (prodinarray) {
           /* const quantity = prodinarray.quantity+1
            const newProduct = {...product, quantity }
            const newcart = cart.filter(item => item.productId !== product.productId)
            setCart([...newcart, newProduct])*/
            const newcart= cart.map(item=> { 
                if (item.id === product.id){ 
                    const quantity = item.quantity+1
                    const newitem = {...item, quantity}
                    return newitem
                }
                else return  item})
            setCart(newcart)
        
        }  
            
        else {
            const quantity = 1
            const newProduct = { ...product, quantity }
            setCart((prevstate) => [...prevstate, newProduct])
        }
    }
    const removeFromCart = (product) => {
        
        const prodinarray = cart.find(item => item.id === product.id)
        if (prodinarray) {
           if(prodinarray.quantity===1){
            const newcart = cart.filter(item => item.id !== product.id)
            setCart(newcart)
           }
           else {
            const newcart= cart.map(item=> { 
                if (item.id === product.id){ 
                    const quantity = item.quantity-1
                    const newitem = {...item, quantity}
                    return newitem
                }
                else return  item})
            setCart(newcart)
            }
        }  
   
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <cartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
            }}>
            {children}
        </cartContext.Provider>
    )
}