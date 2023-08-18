import React from 'react'
import './Styles/StyleSectionTwo.css'
import video from './imagenes/Video-BODYTECH.mp4'
import OlaNegra from './imagenes/wave (5).svg'

function SectionTwo() {
  return (
    <div className='Todo'>
    <div className='conteiner-SectionTwo'> 
    <div className='conteiner-title'>
    <h2 className='title-SectionTwo'>HECHENOS UN VISTASO QUE BODYTECH LO ESPERA</h2>
    </div>
    <section className='VIDEO'>
<video className='el-video' controls>
    <source  src={video} type='video/mp4'></source>
</video>
    </section>
<div className='conteiner-ola'>
<img className='OLA' src={OlaNegra} alt="olanegra" />
</div>
    </div>
    
    </div>
  )
}

export default SectionTwo