import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons'
import './Nav.scss'
import { useState } from 'react'

export default function Navegacion() {

    const [mobile, setMobile] = useState(false)

    const handleClickNav = () => {
        if(mobile === false){
            setMobile(true)
        }
        else{
            setMobile(false)
        }
    }

    let ubicacion = window.pageYOffset;

    window.onscroll = function(){
        let desplazamientoActual = window.pageYOffset;
        let nav = document.getElementById('nav')
        if(ubicacion >= desplazamientoActual){
            nav.style.top = '0px'
        }
        else if(ubicacion <= desplazamientoActual && ubicacion > 50){
            nav.style.top = '-100px'
        }

        ubicacion = desplazamientoActual
    }

    return (
        <>

            <div id='nav'>

                <div className='divTitle'>
                    <a href='#home' className='titleHover'><span className='titulo'><FontAwesomeIcon icon={faLaptopCode} className='icon' /> Rodrigo Navarro</span></a>
                </div>

                <div className='links'>
                    <a href='#home' className='a'>Inicio</a>
                    <a href='#rodrigo' className='a'>Rodrigo</a>
                    <a href='#proyectos' className='a'>Proyectos</a>
                    <a href='#skills' className='a'>Habilidades</a>
                    <a href='#contacto' className='a'>Contacto</a>
                    <FontAwesomeIcon icon={faBars} className='boton' onClick={e => handleClickNav(e)}/>
                </div>

                {mobile && <div className='linksMobile'>
                    <a href='#home' className='aMobile' onClick={handleClickNav}>Inicio</a>
                    <a href='#rodrigo' className='aMobile'  onClick={handleClickNav}>Rodrigo</a>
                    <a href='#proyectos' className='aMobile'  onClick={handleClickNav}>Proyectos</a>
                    <a href='#skills' className='aMobile'  onClick={handleClickNav}>Habilidades</a>
                    <a href='#contacto' className='aMobile'  onClick={handleClickNav}>Contacto</a>
                </div>
                }



            </div>

        </>

    )
}