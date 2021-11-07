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

    return (
        <>

            <div className='nav'>

                <div className='divTitle'>
                    <a href='#home' className='titleHover'><span className='titulo'><FontAwesomeIcon icon={faLaptopCode} className='icon' /> Rodrigo Navarro</span></a>
                </div>

                <div className='links'>
                    <a href='#home' className='a'>Home</a>
                    <a href='#about' className='a'>About me</a>
                    <a href='#projects' className='a'>Projects</a>
                    <a href='#skills' className='a'>Skills</a>
                    <a href='#contact' className='a'>Contact</a>
                    <FontAwesomeIcon icon={faBars} className='boton' onClick={e => handleClickNav(e)}/>
                </div>

                {mobile && <div className='linksMobile'>
                    <a href='#home' className='aMobile'>Home</a>
                    <a href='#about' className='aMobile'>About me</a>
                    <a href='#projects' className='aMobile'>Projects</a>
                    <a href='#skills' className='aMobile'>Skills</a>
                    <a href='#contact' className='aMobile'>Contact</a>
                </div>
                }



            </div>

        </>

    )
}