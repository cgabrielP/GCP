import { Button } from '@chakra-ui/react';
import React from 'react'
import NavBar from '../components/NavBar'
import useAppContext from '../contexts/appContext';

function Bag() {
    const { user, setUser } = useAppContext();
    console.log(user)
    return (
        <>
            <NavBar />
            <Button onClick={()=>setUser(true)}>
                Cambio de estado</Button>  
                  <div>Hola soy el carrito</div>
            <p> hola  </p>
        </>
    )
}

export default Bag