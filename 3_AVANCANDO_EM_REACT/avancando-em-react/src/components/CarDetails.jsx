const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
        <li>{newCar ? "Novo" : "Usado"}</li>
      </ul>
    </div>
  )
}

export default CarDetails