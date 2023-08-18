import React from 'react'
import './Styles/StyleSectionOne.css'

function SectionOne() {
  return (
    <>
        <div className='CuerpoOne'>
         <div className='conteiner-cards'>
         <div className='One'>
          <h2>CLASIC</h2>
          <p>💪 3 MESES + QUEMA GRASA<br></br>
          <br></br>
          💪 INGRESO A SALA DE MAQUINAS <br></br>
          <br></br>
          💪 INGRESA A LA SALA DE CALISTENIA <br></br>
          <br></br>
          💪 ASISTENCIA NUTRICIONAL  <br></br>
          <br></br>
          💪 ASISTENCIA DE UN INSTRUCTOR
          </p>
          <button className='Clasic'>$/ 250</button>
         </div>
         <div className='Two'>
          <h2>PREMIUM</h2>
         < p>
           💪 6 MESES + CREATINA DE 1KG<br></br>
           <br></br>
           💪 INGRESO A TODAS LAS SALAS <br></br>
           <br></br>
           💪 CONTROL NUTIRCIONAL SEMANALES  <br></br>
           <br></br>
           💪  CURSOS DE BOXEO O OTRAS ARTES MARCIALES <br></br>
           
           💪 INSTRUCTOR PERSONAL
           </p>
           <button className='Clasic'>$/ 600</button>
         </div>
         <div className='Tree'>
           <h2>BASIC</h2>     
           <p>
           💪 1 MES + 15 DIAS <br></br>
           <br></br>
           💪 INGRESO A LAS SALA DE MAQUINAS <br></br>
           <br></br>
           💪 INGRESO A LA SALA DE BAILE <br></br>
           <br></br>
           💪 LISTA NUTRICIONAL <br></br>
           <br></br>
           </p>
           <button className='Clasic'>$/ 150</button>
         </div>

         </div>

        </div>
    </>
  )
}

export default SectionOne