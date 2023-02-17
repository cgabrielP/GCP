import { Button } from '@chakra-ui/react';
import React from 'react'
import NavBar from '../components/NavBar'
import ShoppingCart from '../components/ShoppingCart';
import useAppContext from '../contexts/appContext';

const Bag = () => {
    return (
        <>
            <NavBar />
            <ShoppingCart />

        </>
    )
}

export default Bag