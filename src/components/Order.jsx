import { useCart } from "../hooks/useCart"

export function Order ({deliveryInfo}) {
    const cart = useCart()    
    return <>
    {!deliveryInfo ? "the cart is empty" : 
    
    <div style={{display: 'flex', flexDirection: 'column', width: '50%', top: '160px', position: 'absolute', justifyContent: 'start'}}>
    
    <div className="order-number-div">
        <p>{"Order #"+deliveryInfo?.order}</p><p>{deliveryInfo?.date.substring(0, 16)}</p>
    </div>
    <div className="recipient-info-div">
        <h3>{"Recipient information: "}</h3>
        <p>{deliveryInfo?.firstName+" "+deliveryInfo?.lastName}</p>
        <p>{deliveryInfo?.deliveryAdress}</p>
        <p>{deliveryInfo?.zipCode}</p>
        <p>{deliveryInfo?.city}</p>
        <p>{deliveryInfo?.state}</p>
        <div className="recipient-contact">
            <b>{`Email: ${deliveryInfo?.email}`}</b>
            <b>{`Phone number: ${deliveryInfo?.phone}`}</b>
        </div>
        
    </div>
    <div className="orden-items-div">
        <h3>{"Order items"}</h3>
        {deliveryInfo?.cart.map(item => {return <div  className="order-items-row" key={item.id}>
                    <p className="order-item">{`Product:  ${item.title}`}</p><p>{`Quantity:  ${item.quantity}`}</p><p>{`Unit Price: ${item.price} `}</p> 
                  </div>
                })}
        <b>{(deliveryInfo?.shippingType !== "0" ? "Express Shipping " : "Normal Shipping ") + deliveryInfo?.shippingType}</b>
        <h3>{"total "+deliveryInfo?.total}</h3>
    </div>
    
    
    
    
    </div>}
    </> 
     
}
 