import UseRef from './components/UseRef'
import UseRefCallBack from './components/UseRefCallBack'
import UseCallBack from './components/UseCallBack'
import UseEffec from './components/UseEffect'

import { useState, useCallback, useMemo } from 'react'

function App() {
  
  const [contador, setContador] = useState(0);

  // Função estável (não muda entre renders). Evitará que o componente filho renderize desnecessariamente.
  const onAdicionar = useCallback(() => {
    console.log("Item adicionado");
  }, []);

  // Objeto estável (não muda entre renders). Evitará que o componente filho renderize desnecessariamente.
  const config = useMemo(() => {
    return { tema: "dark" };
  }, []);

  console.log("App renderizou");

  return (
    <>
      <UseRefCallBack />
      <UseRef />

      <p>Contador: {contador}</p>

      <button onClick={() => setContador(c => c + 1)}>
        Incrementar contador
      </button>

      <UseCallBack onAdicionar={onAdicionar} config={config} />

      <UseEffec />
    </>
  )
}

export default App
