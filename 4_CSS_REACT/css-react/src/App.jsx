import './App.css'
import Component from './components/Component'
import { useState } from 'react'

function App() {
  let n = 1

  const[style, setStyle] = useState({color: 'black', backgroundColor: 'white'})
   
  const changeStyle = () => {
    setStyle(prevStyle => prevStyle.color === 'black' ? {color: 'white', backgroundColor: 'black'} : {color: 'black', backgroundColor: 'white'})
  }

  const [className, setClassName] = useState('title')

   return (
    <>
        <Component />
        <h1>Estilo vazado de Component</h1>
        <h1 className='example'>Estilo de Component.css usado em App.jsx</h1>
        <p>Este parágrafo está com estilo global definido em App.css</p>
        

        {/* Inline style. Atributos com mais de uma palavra devem ser escritos em camelCase*/}
        <h2 style={{color: 'blue', backgroundColor: 'yellow'}}>Estilo inline</h2>

        <h2 style={style}>Estilo inline com useState</h2>
        <button onClick={changeStyle}>Mudar estilo</button>

        <h2 style={n > 0 ? {color: 'red'} : {color: 'blue'}}>Estilo inline condicional</h2>
        <h2 style={n < 0 ? {color: 'red'} : {color: 'blue'}}>Estilo inline condicional negativo</h2>

        <h2 className={className}>Estilo com className e useState</h2>
        <button onClick={() => setClassName(prevClassName => prevClassName === 'title' ? 'red-title' : 'title')}>Mudar classe</button>

       
    
     </>
    )
  }

export default App
