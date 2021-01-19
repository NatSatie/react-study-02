import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@atlaskit/button/standard-button'
import {GlobalContext} from '../GlobalContext'

const Produto = ({dados}) => {
  const contextData = React.useContext(GlobalContext)
  const [num, setNum] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(false)
  const timeout = React.useRef()
  const {id, fotos, nome, preco, descricao, vendido, usuario_id} = dados

  console.log("Valor da compra atual: ",contextData.valorCompra)

  function handleClickAdd(){
    setNum(num+1)
    contextData.adicionarProduto( parseInt(preco) )
    clearTimeout(timeout.current)
    setNotificacao(true)
    timeout.current = setTimeout(()=>{
      setNotificacao(false)
    } ,1000)
  }

  function handleClickRm(){
    if (num >=1){
      setNum(num-1)
      contextData.removerProduto( parseInt(preco) )
    }
  }


  return (
    <div>
      <h1> {nome} </h1>
      <h3> R${preco},00 </h3>
      <span> Vendido por {vendido} </span>
      <span> {descricao} </span>
      <Button onClick={handleClickAdd}> Adicionar ao Carrinho </Button>
      <Button onClick={handleClickRm}> Remover do Carrinho </Button>
      <h4> Quantidade: {num} </h4>
      <h4> Valor total: R${contextData.valorCompra},00 </h4>
      {notificacao ? (<p> Item Adicionado no carrinho !</p>) : null}
      <img src={fotos[0].src} alt="Girl in a jacket" height="500" />
    </div>
  )
}

export default Produto;
