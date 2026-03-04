import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

//Os variáveis e funçoes do contexto podem ser usados em qualquer componente em qualquer 
//página, mesmo não seja filho direto do provider. O importante é que esteja dentro do
// provider, ou seja, envolvido por ele.
const Home = () => {
  const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>HOME</h1>
      <p>Counter: {counter}</p>
      <ChangeCounter/>
    </div>
  )
}

export default Home