const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
      <h2>Detalhes do Carro:</h2>
      <p>Marca: {brand}</p>
      <p>Km: {km}</p>
      <p>Cor: {color}</p>
      <p>{newCar ? "Novo" : "Usado"}</p>
    </div>
  )
}

export default CarDetails