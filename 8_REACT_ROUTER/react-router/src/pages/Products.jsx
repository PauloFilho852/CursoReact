import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import Info from "../components/Info"

const Products = () => {
  const { id } = useParams()
  const url = `http://localhost:3001/products/${id}`
  const { data: product, loading, error } = useFetch(url)
  return (
    <div>
      <p>ID do Produto: {id}</p>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {product && (
        <div>
          <h1>Nome: {product.name}</h1>
          <p>Preço: R$ {product.price}</p>
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </div>
  )
}

export default Products