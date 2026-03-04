import { createContext, useState } from "react";

export const CounterContext = createContext()

export const CounterProvider = ({children}) => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter => counter + 1)
    }

    const decrement = () => {
        setCounter(counter => counter - 1)
    }

    return (
        //Nós estamos passando o valor do counter e as funções increment e decrement
        //para os componentes filhos através do Provider
        <CounterContext.Provider value={{ counter, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    )
}