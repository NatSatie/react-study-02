import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {
  const [valorCompra, setValorCompra] = React.useState(0)

  function adicionarProduto(value){
    setValorCompra(valorCompra + value)
  }

  function removerProduto(value){
    setValorCompra(valorCompra - value)
  }

  return(
    <GlobalContext.Provider value={{valorCompra, adicionarProduto, removerProduto}}>
      {children}
    </GlobalContext.Provider>
  )
}
