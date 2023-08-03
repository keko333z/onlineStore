import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart"



export function Cart(){

    const cart= useCart()
    const sum = cart.cart.reduce((accumulator, object) => {
      return accumulator + object.price*object.quantity;
    }, 0);

 
   

    const hideCart = () => {
      document.getElementById("cartCheckbox").checked = false
    }
    

    return <>
            <label className='show-cart-button' htmlFor="cartCheckbox">
            <img className="show-cart-button-icon" src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt='cart' ></img>
            </label>
            <input type="checkbox" id="cartCheckbox" hidden></input>
            <div className="cart">

            {cart.cart.length === 0 ? "" : 
             <Link to="/checkout">
              <button className="checkout-button" onClick={hideCart}>
                Checkout
              </button>
            </Link>}      

            { cart.cart.length === 0 ? <div className="cart-row">The cart is empty</div> : cart.cart.map(item => { return <div className="cart-row" key={item.id}>
              {`Product:  ${item.title}, Quantity: ${item.quantity} Unit Price: ${item.price} `} 
              <button className="add-button" onClick={()=>cart.addToCart(item)}>+</button>
              <button className="add-button" onClick={()=>cart.removeFromCart(item)}>-</button>
              </div>
            })}

            <p><b>Sub-Total: $ {sum}</b></p> 

            
            
            
            <p style={{ cursor: "pointer", position: "absolute", top: 20, right: 20}} onClick={cart.clearCart}>
              <img src={'../src/img/can.png'} style={{height: "30px", width: "30px"}} />
                Clear all
            </p>
            
    </div>
    </>
}
