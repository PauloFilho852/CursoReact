import React from "react";

//React.memo condiciona a renderização do componente filho. 
//Ele só renderiza novamente se as props mudarem. O uso de useCallback e useMemo
//no componente pai garante que as props (função e objeto) sejam estáveis, evitando
//renderizações desnecessárias do componente filho.
const UseCallBack = React.memo(function Filho({ onAdicionar, config }) {
  console.log("UseCallBack renderizou");

  return (
    <div style={{ border: "1px solid gray", padding: 8 }}>
      <p>Componente UseCallBack</p>
      <p>Tema: {config.tema}</p>
      <button onClick={onAdicionar}>Adicionar item</button>
      <h1>Como o React decide quem re-renderiza</h1>
        <ul>        
          <li>O estado interno do componente muda (useState, useReducer)</li>
          <li>Alguma prop recebida muda</li>
          <li>O componente pai re-renderiza. (Aqui podemos evitar re-renderizações desnecessárias usando React.memo e useCallback)</li>
          <li>O contexto consumido (useContext) muda</li>        
        </ul>
      <p>Se nenhuma dessas condições acontecer, o componente não re-renderiza.</p>      
    </div>
  );
});

export default UseCallBack;
