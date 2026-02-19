import React from "react";

const UseCallBack = React.memo(function Filho({ onAdicionar, config }) {
  console.log("UseCallBack renderizou");

  return (
    <div style={{ border: "1px solid gray", padding: 8 }}>
      <p>Tema: {config.tema}</p>
      <button onClick={onAdicionar}>Adicionar item</button>
    </div>
  );
});

export default UseCallBack;
