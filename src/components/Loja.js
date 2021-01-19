import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@atlaskit/button/standard-button'

import Produto from './Produto'
import {data} from '../data.js'

const Loja = () => {
  const [loading, setLoading] = React.useState(false)
  const [product, setProduct] = React.useState(null)

  async function handleClick(p){
    setLoading(true)
    setProduct(p)
    setTimeout( () => setLoading(false), 1000)
  }

  return (
    <div>
      <h1> Essa é a Loja D+, porque nao conseguiu um A+</h1>
      { data.map( (d) => {
        return <Button onClick={() => handleClick(d)}> {d.nome} </Button>
      } )}
      {loading ? (<div> Carregando </div>) : ( product===null ? (<div> Produto não selecionado</div>) : <Produto dados={product}/>) }
    </div>
  )
}

export default Loja;
