import { useRef } from "react";

function UseRefCallBack() {
  const inputsRef = useRef({});

  console.log("UseRefCallBack renderizou");

  const setInputRef = (name) => (element) => {
    if (element) {
      inputsRef.current[name] = element;
    } else {
      delete inputsRef.current[name];
    }
  };

  const focarEmail = () => {
    inputsRef.current.email.focus();
    if(inputsRef.current.email.value !== "") {
      console.log("Email preenchido:", inputsRef.current.email.value);
      inputsRef.current.email.value = ""; // Limpa o campo de e-mail após exibir o valor
    }
    else { 
      console.log("Email vazio");
    }
  };

  return (
    <div style={{ border: "1px solid gray", padding: 8 }}>
      <p>Componente UseRefCallBack (useRef modificado por callback)</p>
      <p>Referências a inputs (usado para focar elementos no DOM)</p>
      {/*setIputRef seleciona o elemento do input e armazena na ref inputsRef.current
       com a chave "email" ou "senha". A função é chamada automaticamente quando o input
       é montado ou desmontado*/}
      <input ref={setInputRef("email")} placeholder="E-mail" />
      <input ref={setInputRef("senha")} placeholder="Senha" />
      <button onClick={focarEmail}>Focar e-mail</button>      
    </div>
  );
}

export default UseRefCallBack;
