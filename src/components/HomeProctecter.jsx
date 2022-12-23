import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const HomeProctecter = () => {
  const nameTrainer= useSelector((state)=>state.nameTrainer)
  
  if(nameTrainer){
  return <Navigate to="/pokedex"/>
}
  else{
    return <Outlet/>
  }
}

export default HomeProctecter