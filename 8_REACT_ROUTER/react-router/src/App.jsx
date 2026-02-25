import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import Search from './pages/Search'

import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import Info from './components/Info'
import SearchForm from './components/SearchForm'

import './App.css'

function App() {
  
  
  return (
    <>
    <div className="app">
      <h1>React Router</h1>
      
      <BrowserRouter>
        <Navbar />
        <SearchForm /> {/* Faz o rotemento para a página de busca (Search)*/}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} /> 
          <Route path='/products/:id' element={<Products />} /> {/*:id é passado como parâmetro para a página de produtos*/}
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='*' element={<NotFound />} /> 
          <Route path = '/search' element={<Search />} />  {/*pega a query string de SearchForm.jsx e exibe os resultados*/}    
        </Routes>
      </BrowserRouter>
    </div>
  
    </>
  )
}

export default App
