import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"
import { useTitleColorContext } from "../hooks/useTitleColorContext"
import { useCounterContext } from "../hooks/useCounterContext"

//Os estados e funçoes do contexto podem ser usados em qualquer componente em qualquer 
//página, mesmo que não seja filho direto do provider. O importante é que esteja dentro do
//provider, ou seja, envolvido por ele.

const Home = () => {
  const {counter} = useCounterContext()
  const {color, dispatch} = useTitleColorContext()

   //Enviando a ação para o reducer do TitleColorContext
  const changeColor = () => {
    dispatch({type: "SET_COLOR", payload: "grey"})
  }
 
  return (
    <div>
      <h1 style={{ color }}>HOME</h1>
      <p>Counter: {counter}</p>
      <ChangeCounter/>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Home