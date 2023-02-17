import React, { useState } from 'react';
import useAppContext from '../../contexts/appContext';

const ShoppingCart = () => {
    const {cartItems, setCartItems, flag, setFlag}= useAppContext();

 
    // function to remove item from cart
    const removeFromCart = (item) => {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
    }

    // calculate cart total
    const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => {removeFromCart(item), setFlag(!flag)}}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>Total: ${cartTotal}</div>
            <button onClick={() => setCartItems([])}>Clear Cart</button>
        </div>
    );
}

export default ShoppingCart;
