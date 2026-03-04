import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"
const PageOne = () => {
const {counter} = useContext(CounterContext)

  return (
    <div><h1>PAGE ONE</h1>
    <p>Counter: {counter}</p>
      <ChangeCounter/>
    </div>
  )
}

export default PageOne