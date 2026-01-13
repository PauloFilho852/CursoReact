const TemplateExpressions = () => {
  const name = "João";
  const age = 30;
  const city = "São Paulo";

  return (
    <div>
      <h1>Informações do Usuário</h1>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Cidade: {city}</p>
      <p>{`Olá, meu nome é ${name}, tenho ${age} anos e moro em ${city}.`}</p>
    </div>
  );
}
export default TemplateExpressions;