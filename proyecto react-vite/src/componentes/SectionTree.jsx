import React from 'react'
import './Styles/StyleSectionTree.css'
import Salas from './DatosDCartas/Salas'
import Datos from './DatosDCartas/Datos'


function SectionTree() {
  const LosDatos=Datos.map(v => {return(<Salas title={v.Name} descripcion={v.Descripcion}
    imagen={v.imagen}/>)})

  return (
    <div className='SectionTree'>
        <div className='conteiner-SectionTree' >
            <div className='conteiner-title'>
            <h1 className='Salas-Title'>Porque te mereces lo mejor, nuestros planes incluyen los siguientes beneficios.</h1>
          
            </div>
            <div className='conteiner-salas'>
            {LosDatos}
            
           
            </div>
        </div>
    </div>
  )
}

export default SectionTree