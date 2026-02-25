import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import "./Home.css"

const Home = () => {
  const url = "http://localhost:3001/products"
  const { data: products, loading, error, post, deleteItem } = useFetch(url)

  return (
    <div>
      <h1>Produtos</h1>
      {loading && <p style={{color:"grey"}}>Carregando...</p>}
      {error && <p>{error}</p>}  
      <ul className="products">    
      {products && products.map(product => ( <li key={product.id}>  
        <h2>{product.name}</h2>
        <p>R$ - {product.price}</p>
        <Link to={`/products/${product.id}`}>Detalhes</Link>          
        </li>))}
      </ul>
    </div>
  )
}

export default Home