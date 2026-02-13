function Container({children, value}) {
  return (
    
    <div>
    {/* props.children é o conteúdo passado como filho do componente Container */ }
      {children}
      <p>Valor: {value}</p>
    </div>
  )
}

export default Container