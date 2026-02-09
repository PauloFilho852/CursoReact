import './App.css'
import ReactLogo from './assets/react.svg'
import ManageData from './components/ManageData.jsx'
import ListRender from './components/ListRender.jsx'
import ConditionalRender from './components/ConditionalRender.jsx'
import ShowUserName from './components/ShowUserName.jsx'
import CarDetails from './components/CarDetails.jsx'
import Fragment from './components/Fragment.jsx'

function App() { 
  const name = "Paulo"
  const cars = [
    {id: 1, brand: "Fiat", km: 10000, color: "Preto", newCar: false},
    {id: 2, brand: "Renault", km: 0, color: "Vermelho", newCar: true},
    {id: 3, brand: "Volkswagen", km: 20000, color: "Branco", newCar: false}
  ] 
  
  return (
    <>
      <div>
        <h1>Avançando em React</h1>
      </div>
      {/* imagem na pasta public */}
      <div><img src="/vite.svg" alt="Logo do Vite" /></div>
      {/* imagem na pasta src */}
      <div><img src={ReactLogo} alt="Logo do React" /></div>
      
      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */  }
      <ShowUserName name = {name}/>

      {/* destructuring */ }
      <CarDetails brand="Fiat" km={10000} color="Preto" newCar ={false}/>

      {/* reaproveitamento de componentes */ }
      <CarDetails brand="Renault" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Volkswagen" km={20000} color="Branco" newCar={false}/>

      {/* loop em array de objetos */ }
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
      ))}

      <Fragment />

    </>
  )
}

export default App
