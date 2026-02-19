import MyForm from './components/MyForm'
import './App.css'

function App() {
  
  return (
    <>
      <MyForm user = {{name: "Paulo", email: "paulo@email.com", bio: "Desenvolvedor web", role: "admin"}}/>          
    </>
  )
}

export default App
