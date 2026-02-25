import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'  
const Search = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const url = `http://localhost:3001/products?q=${encodeURIComponent(query)}`
  const {data: products, loading, error} = useFetch(url)
  
  return (
    <div>
      <h1>Search</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {products && products.length === 0 && <p>Nenhum produto encontrado</p>}
      {products && products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default Search