
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeProctecter from './components/HomeProctecter'
import RouteProtecter from './components/RouteProtecter'
import Footer from './layout/Footer'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'

function App() {

  const nameTrainer=useSelector(state=>state.nameTrainer)

  useEffect(() => {
    localStorage.setItem("nameTrainer",nameTrainer)
  }, [nameTrainer])
  
  return (
    <div className="App">
      
      <Routes>

      <Route element={<HomeProctecter/>}>
        <Route path='/' element={<Home/>}/>
      </Route>

      <Route element={<RouteProtecter/>}>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='/pokedex/:id' element={<Pokemon/>}/>
      </Route>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
