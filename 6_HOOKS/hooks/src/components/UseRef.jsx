import { useRef } from "react";


function UseRef() {
  const inputRef = useRef(null);      // referência ao DOM
  const tentativasRef = useRef(0);    // valor interno persistente. Guarda estado sem causar re-render
  
  console.log("UseRef renderizou");

  const handleSubmit = (event) => {
    event.preventDefault();

    const valor = inputRef.current.value;

    if (valor.trim() === "") {
      tentativasRef.current += 1;
      console.log("Tentativas inválidas:", tentativasRef.current);

      inputRef.current.focus(); // devolve o foco ao input
      return;
    }

    console.log("Busca válida:", valor);
    inputRef.current.value = ""; // limpa o input
    inputRef.current.focus(); // devolve o foco ao input
  };

  return (
    <div style={{ border: "1px solid gray", padding: 8 }}>
    <form onSubmit={handleSubmit}>
      <p>Componente UseRef</p>
      <p>Referência a elementos do DOM (usado para focar e guardar valores de inputs)</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Digite sua busca"
      />
      <button type="submit">Buscar</button>
    </form>
    </div>
  );
}

export default UseRef;
