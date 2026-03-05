import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"

const PageOne = () => {
const {counter} = useCounterContext()

  return (
    <div><h1>PAGE ONE</h1>
    <p>Counter: {counter}</p>
      <ChangeCounter/>
    </div>
  )
}

export default PageOne