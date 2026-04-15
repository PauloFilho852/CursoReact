import { useLocation } from "react-router-dom";
import { useMemo } from "react";

//Encapsula a lógica de leitura dos parâmetros de consulta da URL em um hook personalizado
export function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}
