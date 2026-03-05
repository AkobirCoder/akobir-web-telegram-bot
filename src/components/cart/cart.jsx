import React from 'react';
import './cart.css';
import { Button } from '../index';
import { totalPrice } from '../../units/total-price';

const Cart = ({cartItems}) => {
    return (
        <div className='cart__container'>
            <p>
                Umumiy narx: {
                    totalPrice(cartItems).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })
                }
            </p>
            <Button 
                title={`${cartItems.length === 0 ? 'Buyurtma berish' : "To'lov"}`} 
                type={'checkout'} 
                disable={cartItems.length === 0 ? true : false}
            />
        </div>
    );
}

export default Cart;