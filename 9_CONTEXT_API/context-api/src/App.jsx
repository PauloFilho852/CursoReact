
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import PageOne from "./pages/PageOne"
import PageTwo from "./pages/PageTwo"
import PageThree  from "./pages/PageThree"
import Home  from "./pages/Home"

import NavBar from "./components/NavBar"


function App() {
  
  return (
    <>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/pageone' element = {<PageOne/>}></Route>
            <Route path='/pagetwo' element = {<PageTwo/>}></Route>
            <Route path='/pagethree' element = {<PageThree/>}></Route>
          </Routes>
      </BrowserRouter>
     

    </>
  )
}

export default App
