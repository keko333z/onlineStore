import { Formik, Form, Field } from 'formik';
import { CheckoutInformationSchema } from '../schemas/checkoutInformation';
import { useCart } from "../hooks/useCart";
import { useNavigate } from 'react-router-dom';
import { InputField } from './Field';





export function Checkout ({setDeliveryInfo}) {
    const navigate = useNavigate()
    const cart = useCart()
    const sum = cart.cart.reduce((accumulator, object) => {
      return accumulator + object.price*object.quantity;
    }, 0);
    const date = new Date()
    const orderNum = Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111;
    
    return <>   
    {cart.cart.length === 0 ? "The cart is empty" :
     <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        deliveryAdress: '',
        zipCode: '',
        state: '',
        city: '',
        phone: '',
        credCard: '',
        cardCode: '',
        cardExpirationDateMonth: '',
        cardExpirationDateYear: '',
        shippingType: 0,
      }}
      validationSchema={CheckoutInformationSchema}
      onSubmit={(values) => {
        values.order = orderNum
        values.total = sum+parseInt(values.shippingType)
        values.date = date.toString()
        values.cart = cart.cart
        cart.clearCart()
        setDeliveryInfo(values);
       
        navigate("/your-order")
      }}
    >
      {({ values, errors, touched }) => (
        <Form className="checkout-form">
          <div className="checkout-container">
            
            <div className="order-info-div">
                <h3>Review your order</h3>

                {cart.cart.map(item => {return <div className="cart-row" key={item.productId}>
                  {`Product:  ${item.name}, Quantity: ${item.quantity} Unit Price: ${item.price} `} 
                  </div>
                })}
                <p><b>Sub-Total: $ {sum}</b></p>

                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    Free - Normal Shipping
                    <Field type="radio" name="shippingType" value="0" />
                    
                  </label><br></br>
                  <label>
                    50$ - Express Shipping
                    <Field type="radio" name="shippingType" value="50" checked/>
                    
                  </label>
                  <p><b>Total: $ {sum+parseInt(values.shippingType)}</b></p>
                </div>
            </div>
      
            <div className="delivery-info-div">
                <h3>Personal information</h3>

                <InputField error ={errors.firstName} touch={touched.firstName} classNameValue={"delivery-information-field"} fieldName={"firstName"} label={"First name"} />

                <InputField error ={errors.lastName} touch={touched.lastName} classNameValue={"delivery-information-field"} fieldName={"lastName"} label={"Last name"} />

                <InputField error ={errors.email} touch={touched.email} classNameValue={"delivery-information-field"} fieldName={"email"} label={"Email"} type={"email"}/>

                <InputField error ={errors.deliveryAdress} touch={touched.deliveryAdress} classNameValue={"delivery-information-field"} fieldName={"deliveryAdress"} label={"Adress"} />

                <InputField error ={errors.phone} touch={touched.phone} classNameValue={"delivery-information-field"} fieldName={"phone"} label={"Phone number"} />

                <InputField error ={errors.city} touch={touched.city} classNameValue={"delivery-information-field"} fieldName={"city"} label={"City"} />

                <InputField error ={errors.state} touch={touched.state} classNameValue={"delivery-information-field"} fieldName={"state"} label={"State"} />

                <InputField error ={errors.zipCode} touch={touched.zipCode} classNameValue={"delivery-information-field"} fieldName={"zipCode"} label={"Zip Code"} />
    
            </div>

            <div className="payment-info-div">
                <h3>Payment information</h3>

                <label htmlFor="zipCode">Card number</label>
                <Field className= "delivery-information-field" name="credCard" />
                {errors.credCard && touched.credCard ? (
                  <div className="field-error">{errors.credCard}</div>
                ) : <div className="field-error"></div>}    

              
                <label htmlFor="cardCode">Card code</label>
                <Field className= "delivery-information-field" name="cardCode" />
                {errors.cardCode && touched.cardCode ? (
                  <div className="field-error">{errors.cardCode}</div>
                ) : <div className="field-error"></div>}

                <label htmlFor="cardExpirationDateMonth">Expiration date (MM/YY)</label>
                <div style={{float: "left"}}><Field className= "delivery-information-field-date" name="cardExpirationDateMonth" /> / <Field className= "delivery-information-field-date" name="cardExpirationDateYear" /></div>
                {errors.cardExpirationDateMonth && touched.cardExpirationDateMonth ? (
                  <div className="field-error">{errors.cardExpirationDateMonth}</div>
                ) : <div className="field-error"></div>} 
                {errors.cardExpirationDateYear && touched.cardExpirationDateYear ? (
                  <div className="field-error">{errors.cardExpirationDateYear}</div>
                ) : <div className="field-error"></div>} 

            </div>
          </div>
          <button type="submit">Complete order</button>
        </Form>
      )}
    </Formik>
 } </>

  
 
}
;