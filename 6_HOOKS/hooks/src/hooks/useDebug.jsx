import { useDebugValue } from "react";


export const useDebug = (value) => {
    // O useDebugValue é usado para exibir informações de depuração personalizadas no React DevTools. Ele é útil para entender o estado interno de um hook personalizado.
    useDebugValue(value ? "Valor presente" : "Valor ausente");

    return value;
}