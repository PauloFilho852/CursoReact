import { useState, useEffect } from 'react'
import './App.css'

//custom hook
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3001/products'

function App() {
  const [products, setProducts] = useState([])

  const { data:items, loading, error, httpConfig } = useFetch(url)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
/*
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, [])
*/

  //Enviar dados para o backend
  const handleAddProduct = (e) => {
    e.preventDefault();
    /*
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price: parseFloat(price)}),
      });
      const newProduct = await response.json();
      setProducts(prev => [...prev, newProduct]);
      */
      
      httpConfig({ name, price: parseFloat(price)}, 'POST');
      
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
            {items && items.map(product => (
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
