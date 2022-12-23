import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../pages/styles/PokemonCard.css"

const PokemonCard = ({pokemon}) => {

  const navigate=useNavigate()
  
  const [dataPokemon, setDataPokemon] = useState()
  
  const handleClick=()=>{
      navigate(`/pokedex/${dataPokemon?.id}`)
  }
  
  useEffect(() => {
    axios.get(pokemon.url)
    .then(res=>setDataPokemon(res.data))
    .catch(err=>console.log(err))
  }, [])
  
  const types= dataPokemon?.types.map((type)=>type.type.name).join("/")

  return (
    <article onClick={handleClick} className={`pokeCard border-${dataPokemon?.types[0].type.name}`}>
    <section className={`pokeCard-header bg-lg-${dataPokemon?.types[0].type.name}`}></section>
    <section className='pokeCard-content'>
      <img  className='pokeCard-img'src={dataPokemon?.sprites.other["official-artwork"].front_default} />
      <h3 className='pokeCard-name'> {pokemon.name}</h3>
      <p className='pokeCard-types-title-'>Type</p>
      <p className='pokeCard-types'>{types}</p>
      <hr />
      <section className='pokeCard-stats'>
        {
          dataPokemon?.stats.map(stat=>(
            <div key={stat.stat.name} className='pokeCard-stat'>
          <p className='pokeCard-stat-name'>{stat.stat.name}</p>
          <p className='pokeCard-stat-value'>{stat.base_stat}</p>
        </div>
          ))
        }
        
      </section>
    </section>

 
    </article>
  )
}

export default PokemonCard