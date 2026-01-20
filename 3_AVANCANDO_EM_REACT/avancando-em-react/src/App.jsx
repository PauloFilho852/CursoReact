import './App.css'
import ReactLogo from './assets/react.svg'
import ManageData from './components/ManageData.jsx'
import ListRender from './components/ListRender.jsx'

function App() {  
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

    </>
  )
}

export default App
