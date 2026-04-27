import {useRef, useImperativeHandle, forwardRef} from 'react'

//ref permite acessar diretamente um elemento do DOM ou uma instância de um componente filho.
const UseImperativeHandle = forwardRef((props, ref) => {
    const inputRef = useRef();

    // Expor apenas a função validate para o componente pai, mantendo o restante da implementação encapsulada.
    useImperativeHandle(ref, () => ({
                    validate: () => {
                if(inputRef.current.value.length < 5) {
                    alert("Valor inválido");
                    inputRef.current.focus();
                } else {
                    alert("Valor válido");
                    inputRef.current.focus();
                }
            }       
        }));  

  return (
    <div>
        <hr />
      <h1>UseImperativeHandle</h1>
      <input placeholder="UseImperativeHandle"  type="text" ref={inputRef} />          
    </div>
  )
})

export default UseImperativeHandle