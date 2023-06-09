import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    //  const cart = props.cart ; option 1 
    // const {cart} = props ; //option 2
    

    let totalPrice = 0 ;
    let totalShipping = 0 ;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity ;
        totalShipping = totalShipping + product.shipping
    }
    const tax = totalPrice * 7/100 ;
    const grandTotal = totalPrice + totalShipping + tax ;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>selected items: {cart.length}</p>
            <p>Total price:$ {totalPrice}</p>
            <p>Toral shipping: {totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h6>Grand total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;