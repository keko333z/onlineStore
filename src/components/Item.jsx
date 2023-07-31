import { useCart } from "../hooks/useCart"

export function Item({product}){
    const cart = useCart()
    
    return <>
        <div className="item">
            <p>{product.name}</p>
            <p>{product.model}</p>
            <p>{product.details.color}</p>
            <p>{product.details.mileage}</p>
            <p>{product.details.transmition}</p>
            <p>{product.price}</p>
            <button className="cart-button" onClick={() => cart.addToCart(product)}>Add to cart</button>
        </div>
    </>
}
