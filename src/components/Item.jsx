import { useCart } from "../hooks/useCart"

export function Item({product}){
    const cart = useCart()
    
    return <>
        <div className="item">
            <p>{product.title}</p>
            <img className="item-image" src={product.image} alt="picture"></img>
            
            
            <p>${product.price}</p>
            <button className="cart-button" onClick={() => {cart.addToCart(product); window.alert("product added to cart")}}>Add to cart</button>
        </div>
    </>
}
/*
<p>{product.description}</p>
<p>{product.category}</p>
id: 2,
title: "Mens Casual Premium Slim Fit T-Shirts ",
price: 22.3,
description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
category: "men's clothing",
image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
rating: {
rate: 4.1,
count: 259
}
*/