import UseRef from './components/UseRef'
import UseRefCallBack from './components/UseRefCallBack'
import UseCallBack from './components/UseCallBack'
import UseEffect from './components/UseEffect'
import UseLayoutEffect from './components/UseLayoutEffect'
import UseImperativeHandle from './components/UseImperativeHandle'
import UseDebugValue from './components/UseDebugValue'

import { useState, useCallback, useMemo, useRef } from 'react'

function App() {
  
  const [contador, setContador] = useState(1);
  const childRef = useRef();


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
      <div style={{ border: "1px solid gray", padding: 8 }}>
          <p>Componente App</p>
          <p>Contador: {contador}</p>
          <button onClick={() => setContador(c => c + 1)}>
          Incrementar contador
          </button>
      </div>
      <UseRef />
      <UseRefCallBack />
      <UseCallBack onAdicionar={onAdicionar} config={config} />
      <UseEffect/>
      <UseLayoutEffect />

      // O componente pai pode chamar a função validate do componente filho através da ref, sem precisar conhecer os detalhes internos do componente filho.
      <UseImperativeHandle ref={childRef}/>
      <button onClick={() => childRef.current.validate()}>Validar</button>

      <UseDebugValue value={contador} />      
    </>
  )
}
export default App
