import React from 'react'
import './Styles/StyleHeader.css'
import logo from './imagenes/bx-dumbbell.svg'
// import SearchImput from './SearchImput'

function Header() {
  return (
    <div className='header'>
    <div className='todo'>
    <div className='TL'>
        <h1 className='titulo'>
            BODYTECH
        </h1>
       <img src={logo} alt=''/>
    </div>
    <div className='Navbar'>
        <nav className='nav'>
            <a className='a' href="http://" target="_blank" >Home</a>
            <a className='a' href="http://" target="_blank" >Productos</a>
            <a className='a' href="http://" target="_blank" >Sedes</a>
            <a className='a' href="http://" target="_blank" >Asesoria</a>
            <a className='a' href="http://" target="_blank" >Elementos</a>
        </nav>
        {/* <div>
        <SearchImput/>
        </div> */}
    </div>

    </div>
    <div className='portada'>
    <div className='presentacion'>
        <div className='strong'>
        <h1 className='el-strong'>S T R O N G</h1>
        </div>
        <div className='La-frase'>
        <p className='frase'>more physical strength makes me unstoppable,<br></br> but more willpower makes me indestructible</p>
        </div>
        <div className='Fgirado'>
           <h2 className='letras'>WHAT WE HAVE <br></br>TO OFFER</h2>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Header