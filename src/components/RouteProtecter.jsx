import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../layout/Header'

const RouteProtecter = () => {
  const nameTrainer=useSelector((state)=>state.nameTrainer)
  
  if(nameTrainer){
    return (
    <><Header/>
    <Outlet/></>)
  }else{
    return <Navigate to="/"/>
  }

  return (
    <div>RouteProtecter</div>
  )
}

export default RouteProtecter