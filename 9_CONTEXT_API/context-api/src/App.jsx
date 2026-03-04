
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import PageOne from "./pages/PageOne"
import PageTwo from "./pages/PageTwo"
import PageThree  from "./pages/PageThree"
import Home  from "./pages/Home"

import NavBar from "./components/NavBar"

import "./App.css"


function App() {
  
  return (
    <div className ='app'>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/pageone' element = {<PageOne/>}></Route>
            <Route path='/pagetwo' element = {<PageTwo/>}></Route>
            <Route path='/pagethree' element = {<PageThree/>}></Route>
          </Routes>
      </BrowserRouter>   

    </div>
  )
}

export default App
