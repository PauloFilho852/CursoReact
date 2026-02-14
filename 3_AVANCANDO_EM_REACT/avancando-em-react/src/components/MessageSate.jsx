const MessageSate = ({changeMessage}) => {
    
  const messages = [
    "Primeira mensagem",
    "Segunda mensagem",
    "Terceira mensagem"
  ]  

  return (
    <div>
      <button onClick={() => changeMessage(messages[0])}>Clique para mudar a mensagem</button>
      <button onClick={() => changeMessage(messages[1])}>Clique para mudar a mensagem</button>
      <button onClick={() => changeMessage(messages[2])}>Clique para mudar a mensagem</button>    
    </div>
  )
}

export default MessageSate