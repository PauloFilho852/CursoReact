
import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"

const PageThree = () => {
  const {counter} = useCounterContext()
  return (
    <div>
      <h1>PAGE THREE</h1>
      <p>Counter: {counter}</p>
      <ChangeCounter/>
    </div>
  )
}

export default PageThree