import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/Pokemon.css"

const Pokemon = () => {
  const [dataPokemon, setDataPokemon] = useState()
  
  const {id}=useParams()

  const getPercentBarProgres=(valueStat)=>{
      const maxValue=150
      return `${((valueStat*100)/maxValue)}%`
  }

  useEffect(() => {
    const URL=`https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res=>setDataPokemon(res.data))
    .catch(err=>console.log(err))
  }, [])
  
  return (
    <main className='pokemon'>
      <section className='pokemonId'>
      <section className={`pokemonId-header bg-lg-${dataPokemon?.types[0].type.name}`}></section>
      <img src={dataPokemon?.sprites.other["official-artwork"].front_default} className='pokeminId-im' />
      <h3 className='pokemonId-id'># {dataPokemon?.id}</h3>
      <h2 className='pokemonId-name'>{dataPokemon?.name}</h2>
      <section className='pokemonId-features'>
        <div className='pokemonId-feature'>
          <p className='pokemonId-feature-name'>Weigth</p>
          <p className='pokemonId-feature-value'>{dataPokemon?.weight}</p>
        </div>
        <div className='pokemonId-feature'>
          <p className='pokemonId-feature-name'>Heigth</p>
          <p className='pokemonId-feature-value'>{dataPokemon?.height}</p>
        </div>
      </section>

      <section className='pokemonId-info'>
        <div className='pokemonId-info-container'>
          <h4 className='pokemonId-info-title'>Types</h4>
          <div className='pokemonId-info-data'>
            {
              dataPokemon?.types.map(type=> <p className={`pokemonId-info-value bg-lg-${type.type.name}`} key={type.type.name}>{type.type.name}</p> )
            }
          </div>
        </div>
        <div className='pokemonId-info-container'>
        <h4 className='pokemonId-info-title'>Abilities</h4>
          <div className='pokemonId-info-data'>
            {
              dataPokemon?.abilities.map(ability=> <p className='pokemonId-info-value' key={ability.ability.name}> {ability.ability.name}</p> )
            }
          </div>
        </div>
      </section>
      <section className='pokemonId-stats'>
        <h3 className='pokemonId-stats-title'>Stats</h3>
        <div className='pokemonId-stats-container'>
          {
            dataPokemon?.stats.map(stat=>(
               <div  className='pokemonId-stat'>
            <div className='pokemonId-stat-header'>
              <p className='pokemonId-stat-name'>{stat.stat.name}</p>
              <p className='pokemonId-stat-value'>{stat.base_stat}</p>
            </div>
            <div className='pokemonId-stat-bar'>
              <div style={{width:getPercentBarProgres(stat.base_stat)}} className='pokemonId-stat-barProgres'></div>
            </div>
          </div>
            ))
          }
        </div>
      </section>
      </section>
    </main>
  )
}

export default Pokemon