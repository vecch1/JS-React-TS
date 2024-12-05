import React from 'react'

const CarDetails = ({Brand,Km,Color}) => {
  return (
    <div>
        <h2>detalhes do carro:</h2>
        <ul>
            <li>Marca: {Brand}</li>
            <li>Kilometragem: {Km}</li>
            <li>Cor: {Color}</li>
        </ul>
    </div>
  )
}

export default CarDetails