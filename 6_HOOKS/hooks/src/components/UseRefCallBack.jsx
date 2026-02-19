import { useRef } from "react";

function UseRefCallBack() {
  const inputsRef = useRef({});

  const setInputRef = (name) => (element) => {
    if (element) {
      inputsRef.current[name] = element;
    } else {
      delete inputsRef.current[name];
    }
  };

  const focarEmail = () => {
    inputsRef.current.email.focus();
  };

  return (
    <>
      <input ref={setInputRef("email")} placeholder="E-mail" />
      <input ref={setInputRef("senha")} placeholder="Senha" />
      <button onClick={focarEmail}>Focar e-mail</button>
    </>
  );
}

export default UseRefCallBack;
