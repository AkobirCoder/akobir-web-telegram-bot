import React from 'react';
import './cart.css';
import { Button } from '../index';

const Cart = () => {
    return (
        <div className='cart__container'>
            <p>Umumiy narx: $12.00</p>
            <Button title={'Buyurtma'} type={'checkout'} />
        </div>
    );
}

export default Cart;