import { useDebug } from "../hooks/useDebug";
import { useState } from "react";
const UseDebugValue = ({ value }) => {
    const [user, setUser] = useState(null);
    const debugValue = useDebug(value);

    return (
        <div>
            <hr />
            <h1>UseDebugValue</h1>
            <p>Valor: {debugValue}</p>
        </div>
    )
}

export default UseDebugValue