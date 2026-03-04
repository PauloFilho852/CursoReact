import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const ChangeCounter = () => {
  const { increment, decrement } = useContext(CounterContext)

  return (
    <div>
    <h1>Change Counter</h1>        
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default ChangeCounter