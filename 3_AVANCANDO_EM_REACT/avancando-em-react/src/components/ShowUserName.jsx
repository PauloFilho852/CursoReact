const ShowUserName = (props) => {
  return (
    <div>
      <h2>Nome do Usuário: {props.name}</h2>
      <p>Sobrenome: {props.lastName}</p>
    </div>
  )
}

export default ShowUserName