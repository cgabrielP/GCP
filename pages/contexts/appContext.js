import React, { useContext, createContext } from 'react';

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(false);
  const [variableState, setVariableState] = React.useState([]);
  const getData = () => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(json => { setVariableState(json) })

  }
  //ComponentDidMouunt
  React.useEffect(() => {
    getData()
  }, [variableState]);

  //
  const values = React.useMemo(() => (
    { variableState, user ,    // States que seran visibles en el contexto.
      setVariableState, setUser, getData  // Funciones que son exportadas para manejo externo.
    }), 
    [ 
      variableState, user ]);   // States que serán visibles en el contexto.

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