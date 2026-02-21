import { use } from 'react'
import { useState, useEffect } from 'react'


function App() {
  const [products, setProducts] = useState([])

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

  console.log(products)
  return (
    <>
      <div>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>

      </div>  
    </>
  )
}

export default App
