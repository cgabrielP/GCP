import {Box, Container, Flex, Image, SimpleGrid, Text, useColorModeValue,} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import NavBar from '../components/NavBar';
import ProDetail from '../components/ProDetail';
import useAppContext from '../contexts/appContext';

const ProductDetail = () => {
    const { product,getProductByID } = useAppContext()
    const router =useRouter();
    const{id}=router.query

    React.useEffect(() => {
        getProductByID({id})
      }, []);
    return (
        <>
        <NavBar/>
        <ProDetail product={product} />
        </>

    );
}

export default ProductDetail;