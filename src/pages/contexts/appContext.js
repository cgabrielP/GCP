import React, { useContext, createContext } from 'react';

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  
  const getData = () => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(json => { setProducts(json) })

  }
  const getProductByID = ({id}) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(json => { setProduct(json) })

  }
  //ComponentDidMouunt
  React.useEffect(() => {
    getData()
  }, []);

  //
  const values = React.useMemo(() => (
    { products, user , product,   // States que seran visibles en el contexto.
      setProducts, setUser, getData, getProductByID  // Funciones que son exportadas para manejo externo.
    }), 
    [ 
      products, user,product ]);   // States que serán visibles en el contexto.

      return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export function useAppContext() {
  const context = useContext(AppContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;