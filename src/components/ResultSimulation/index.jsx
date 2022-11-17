import React from 'react'
import { Container } from './styles'

export default function ResultSimulation({simulations}){
  return (
    <Container>
      <h2 className='resultSimulation__title'>VOCÊ RECEBERÁ:</h2>
      <div className='resultSimulation__wrapper'>
        <p className='resultSimulation__day'>Amanhã: <span className='resultSimulation__amount'>R$ {simulations[0]?.slice(1)}</span></p>
        <p className='resultSimulation__day'>Em 15 dias: <span className='resultSimulation__amount'>R$ {simulations[1]?.slice(1)}</span></p>
        <p className='resultSimulation__day'>Em 30 dias: <span className='resultSimulation__amount'>R$ {simulations[2]?.slice(1)}</span></p>
        <p className='resultSimulation__day'>Em 90 dias: <span className='resultSimulation__amount'>R$ {simulations[3]?.slice(1)}</span></p>
      </div>
    </Container>
  )
}
