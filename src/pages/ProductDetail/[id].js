import { useRouter } from 'next/router';
import React from 'react';
import NavBar from '../components/NavBar';
import ProDetail from '../components/ProDetail';
import useAppContext from '../contexts/appContext';
import Footer from '../components/Footer'


const ProductDetail = () => {
  
    const { product,getProductByID } = useAppContext()
    const router =useRouter();
    const{id}=router.query

    React.useEffect(() => {
        getProductByID({id})
      }, []);
      React.useEffect(() => {
        getProductByID({id})
      }, [product]);
    return (
        <>
        <NavBar/>
        <ProDetail product={product} />
        <Footer />
        </>

    );
}

export default ProductDetail;