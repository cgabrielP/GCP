import React, { useContext, createContext } from 'react';

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [flag, setFlag] = React.useState(true);

  const getData = async () => {
    await fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(json => { setProducts(json) })

  }
  const getProductByID = async ({ id }) => {
    await fetch(`http://localhost:3000/api/products${id}`)
      .then(response => response.json())
      .then(json => { setProduct(json) })

  }
  //ComponentDidMouunt
  React.useEffect(() => {
    getData()
  }, []);

  //
  const values = React.useMemo(() => (
    {
      flag,products, user, product, cartItems,   // States que seran visibles en el contexto.
      setProducts, setUser, getData, getProductByID, setCartItems, setFlag  // Funciones que son exportadas para manejo externo.
    }),
    [
      products, user, product, cartItems, flag]);   // States que serán visibles en el contexto.

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;