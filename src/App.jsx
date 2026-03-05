import React, { useEffect, useState } from 'react';
import './App.css';
import { getData } from './constants/db';
import { Card, Cart } from './components/index';

const courses = getData();

const telegram = window.Telegram.WebApp;

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        telegram.ready();
    }, []);

    const onAddItem = (item) => {
        const existItem = cartItems.find((cartItem) => {
            return cartItem.id === item.id;
        });

        console.log('EXIST_ITEM', existItem);

        if (existItem) {
            const newData = cartItems.map((cartItem) => {
                return cartItem.id === item.id 
                    ? {...existItem, quantity: existItem.quantity + 1}
                    : cartItem;
            });

            console.log('ADD_QUANTITY_EXIST_ITEM', newData);

            setCartItems(newData);
        } else {
            const newData = [...cartItems, {...item, quantity: 1}];

            console.log('ADD_NEW_ITEM', newData);

            setCartItems(newData);
        }
    }

    const onRemoveItem = (item) => {
        const existItem = cartItems.find((cartItem) => {
            return cartItem.id === item.id;
        });

        console.log('existItem', existItem);

        if (existItem.quantity === 1) {
            const newData = cartItems.filter((cartItem) => {
                return cartItem.id !== existItem.id;
            });

            console.log('DELETE_ITEM_QUANTITY_0', newData);

            setCartItems(newData);
        } else {
            const newData = cartItems.map((cartItem) => {
                return cartItem.id === existItem.id
                    ? {...existItem, quantity: existItem.quantity - 1}
                    : cartItem;
            });

            console.log('DELETE_1_ITEM_QUANTITY', newData);

            setCartItems(newData);
        }
    }

    const onCheckout = () => {
        telegram.MainButton.text = 'Sotib olish 😊';

        telegram.MainButton.show();
    }

    return (
        <>
            <h1 className='heading'>Akobir kurslar</h1>
            <Cart 
                cartItems={cartItems} 
                onCheckout={onCheckout}
            />
            <div className='cards__container'>
                {
                    courses.map((course) => {
                        return (
                            <Card
                                key={course.id}
                                {...course}
                                course={course}
                                onAddItem={onAddItem}
                                onRemoveItem={onRemoveItem}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default App;