import { useCounterContext } from "../hooks/useCounterContext"
import ChangeCounter from "../components/ChangeCounter"

const PageTwo = () => {
  //Usando o hook personalizado para acessar o contexto, 
  //o código fica mais limpo e fácil de ler.
  const {counter} = useCounterContext()
  return (
    <div>
      <h1>PAGE TWO</h1>
      <p>Counter: {counter}</p>
      <ChangeCounter/>
    </div>
  )
}

export default PageTwo