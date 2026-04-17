import React from "react";
import { useLayoutEffect, useState, useEffect } from "react";

const UseLayoutEffect = () => {
  const [usuario, setUsuario] = useState({ name: "Pedro", email: "Lima" });
  let user = { name: "Paulo", email: "Filho" };

  useEffect(() => {
    console.log("useEffect do useLayoutEffect executado");
  }, []);

  useLayoutEffect( () => {
    setUsuario(user);
    console.log("useLayoutEffect executado");   
   
  }, []);// Executa efeitos colaterais de forma síncrona, bloqueando a renderização até que o efeito seja concluído.

  return (
    <div style={{ border: "1px solid gray", padding: 8 }}>
      <p>Componente UseLayoutEffect</p>
      <h2>Perfil do Usuário</h2>
      <p><strong>Nome:</strong> {usuario.name}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
    </div>
  );
};

export default UseLayoutEffect;