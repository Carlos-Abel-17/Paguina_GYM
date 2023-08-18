import React from 'react'
import './Styles/StyleFooter.css'
import OLAFO from './imagenes/wave (8).svg'
import Facebook from './Iconos/Facebook.svg'
import Instragram from './Iconos/Instagram.svg'
import Tiktok from './Iconos/Tiktok.svg'
import Youtube from './Iconos/Youtube.svg'

function Footer() {
  return (
    <>
    <div className='Footer'>
<div className='contenedor-OLA'>
    <img src={OLAFO} alt="" />
</div>
<div className='conteiner-Footer'>
<div className='lista-1'>
    <ul>
      <li><a href="h">Aviso Legal</a></li>
      <br></br>
      <li><a href="h">Privacidad Politica</a></li>
      <br></br>
      <li><a href="h">Cookies Policy</a></li>
      <br></br>
      <li><a href="h">Quality Policy</a></li>
    </ul>
  </div>
  <div className='title-icon'>
  <div className='conteniendo-title'>
 <h3 className='title-Footer'>Nuestras Redes</h3>
  </div>
 <div className='conteiner-ICON'>
<a  href='https://www.facebook.com/bodytechpe' target='_blank'><img className='redes' src={Facebook} alt="" /></a>
<a  href='https://www.instagram.com/bodytechpe/' target='_blank'><img className='redes' src={Instragram} alt="" /></a>
<a  href='' ><img className='redes' src={Tiktok} alt="" /></a>
<a  href='https://www.youtube.com/@bodytechpe' target='_blank'><img className='redes' src={Youtube} alt="" /></a>
 </div>
  </div>
<div className='lista-2'>
    <ul>
      <li><a href="h">BodyTech</a></li>
      <br></br>
      <li><a href="h">Blog</a></li>
      <br></br>
      <li><a href="h">Contact</a></li>
      <br></br>
      <li><a href="h">FAQs</a></li>
    </ul>
  </div>
</div>
<div className='ultimo-elemento'>
  <h5 className='h-5'>Copyright © 2023 Bodytech Peru</h5>
</div>
    </div>
    </>
  )
}

export default Footer