import './Header.scss'
import imagenPropia from '../../images/rodrigo.png'
export default function Header (){

    return(
        <div className='header'>
               
                <div className='imagen'>
                    <img src={imagenPropia} alt="" className='medidasImg' />
                    <div className='titulo'>
                    <div className='dinamismo'>
                    <span className='hello'>Hola</span>
                    <ul className='argumentos'>
                        <li>Desarrolladores</li>
                        <li>Reclutadores</li>
                        <li>Mundo!</li>
                    </ul>
                    </div>
                    </div>
                </div>
                <div className='titleHeader'>
                    <span className='text'>Mi nombre es Rodrigo y soy </span>
                    <span className='text'><b className='cargo color'>Desarrollador Web</b></span>
                </div>
        </div>
    ) 
}