import { useState, useEffect } from 'react'
import './App.css'

//custom hook
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3001/products'

function App() {
  const { data, loading, error, post } = useFetch(url)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  //Enviar dados para o backend
  const handleAddProduct = (e) => {
    e.preventDefault();         
      post({ name, price: parseFloat(price)});      
      setName('');
      setPrice('');
    }
  
  if (loading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      
      <div className='center'>        
        <div >
          <h1>Lista de Produtos</h1>
        </div>

        <div >
          <ul>
            {data && data.map(product => (
              <li key={product.id}>{product.name} - R$ {product.price}</li>
            ))}
          </ul>
        </div>
        
        <div className='add-product'>

          <h2>Adicionar Produto</h2>
          <form onSubmit={handleAddProduct}>
           <label>
            Nome:
            <input 
              type="text"
              placeholder="Nome do produto"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            </label>

            <label>
              Preço:
            <input 
              type="number"
              placeholder="Preço do produto"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            </label>

            <button type="submit">Adicionar</button>
          </form>

        </div>

      </div>  
    </>
  )
}

export default App
