import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import "./styles/FormHome.css"
const FormHome = () => {

    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
      const nameTrainer= e.target.nameTrainer.value.trim()
       dispatch(setNameTrainerGlobal(nameTrainer))
    }

  return (
    <form className='home-form' onSubmit={handleSubmit}>
            <input className='home-input' id='nameTrainer' type="text" placeholder='Your name...' />
            <button className='home-btn'>Start!</button>
        </form>
  )
}

export default FormHome