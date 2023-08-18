import React from 'react';
import './StyleSalas.css'


function Salas({title='hola',descripcion='sigo diceind hola ',imagen}) {
  return (
        <div>
      <div className='cajas'>
        <div className='conteiner-LasSalas'>
        <img className='imagenes' src={imagen} alt="" />
        <h2 className='titulo'>{title}</h2>
        <p className='descripcion'>{descripcion}</p>
        </div>
    </div>
        </div>
  )
}

export default Salas