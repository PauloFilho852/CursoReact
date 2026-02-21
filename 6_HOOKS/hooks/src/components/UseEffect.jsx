import { useEffect, useState } from "react";

function UseEffect() {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);
  
  console.log("UseEffect renderizou");

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Executa efeitos colaterais após a renderização, sem atrasar a UI.
  useEffect(() => {
    async function buscarUsuario() {
      try {        
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users/2");
        await delay(2000); // Simula um delay de 2 segundos
        const dados = await resposta.json();
        setUsuario(dados);
      } catch (erro) {
        console.error("Erro ao buscar usuário", erro);
      } finally {
        setCarregando(false);
      }
    }

    buscarUsuario();
  }, []); // executa apenas uma vez (na montagem do componente, na primeira renderização)

  if (carregando) {
    return <p>Carregando...</p>;
  }

  return (
    <div style={{ border: "1px solid gray", padding: 8 }}>
      <p>Componente UseEffect</p>
      <h2>Perfil do Usuário</h2>
      <p><strong>Nome:</strong> {usuario.name}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
    </div>
  );
}

export default UseEffect;
