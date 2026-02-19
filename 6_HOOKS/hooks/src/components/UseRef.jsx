import { useRef } from "react";


function UseRef() {
  const inputRef = useRef(null);      // referência ao DOM
  const tentativasRef = useRef(0);    // valor interno persistente
 

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
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Digite sua busca"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default UseRef;
