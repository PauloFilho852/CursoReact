import { useCounterContext } from "../hooks/useCounterContext"

const ChangeCounter = () => {
  const { increment, decrement } = useCounterContext()

  return (
    <div>
    <h1>Change Counter</h1>        
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default ChangeCounter