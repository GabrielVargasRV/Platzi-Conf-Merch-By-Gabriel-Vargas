import React,{useContext} from 'react';
import {PayPalButton} from 'react-paypal-button'
import AppContext from '../context/AppContext.js';
import { Link,useHistory } from 'react-router-dom';
import '../style/components/Payment.css';


const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart,buyer } = state;

    const paypalOptions = {
        clientId: 'AQhiNzs3y7a3Lr2zvnZ5IbjR1orODwYMAGiVTZTDTlPjNL2i0cO18S33I9jRPv2Fkp9Y-sj1RSz6fx4-',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    const handlePaymentSuccess = (data) => {
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.pushState('/checkout/success')
        }
    }

    return(
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.title} >
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>
                                $
                                {' '}
                                {item.price}
                            </span>
                        </div>
                    </div>
                ))}
                <Link to="/checkout/success" >
                    <div className="Payment-button">
                        <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal}
                        onPaymentStart={() => console.log('Start Payment')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                        />
                    </div>
                </Link>
            </div>
            <div></div>
        </div>
    );
}

export default Payment;