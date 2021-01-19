import React from 'react'
import './App.css';

import Button from '@atlaskit/button/standard-button'
import Produto from './components/Produto'

import {data} from './data.js'

function App() {
  const [loading, setLoading] = React.useState(false)
  const [product, setProduct] = React.useState(null)

  async function handleClick(p){
    setLoading(true)
    setProduct(p)
    setTimeout( () => setLoading(false), 1000)
  }

  return (
    <div className="App">
      { data.map(
        d => {
          return <Button onClick={() => handleClick(d)}>{d.nome}</Button>
        }
      ) }
      {loading ? <div> Carregando </div>: ( product===null ? <div> Produto não selecionado</div> : <Produto dados={product}/>) }
    </div>
  );
}

export default App;
