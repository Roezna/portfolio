import './Contacto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink,  } from '@fortawesome/free-solid-svg-icons';
import ig from '../../images/contacto/instagram.png'
import wh from '../../images/contacto/whatsapp.png'
import gm from '../../images/contacto/gmail.png'
import ln from '../../images/contacto/linkedin.png'

export default function Contacto(){

    return (
        <div id='contacto'>
            <span className='titulo'>Contacto</span>
            <div className='textoPrevio'>
                <span className='intro'>Te dejo algunas de mis redes sociales donde podrás encontrarme y hacerme cualquier consulta que tengas. 
                Como ya dije, la idea es retroalimentarnos! <FontAwesomeIcon icon={faSmileWink} className='icon'></FontAwesomeIcon></span>
            </div>

            <div className='redes'>
                <a href="https://www.linkedin.com/in/rodrigo-navarro-445131212/" target='blank'>
                    <img src={ln} alt="Linkedin de Rodrigo" className='imagen ln'/>
                </a>
                <a href="mailto:rodrigoezequielnavarro99@gmail.com" target='blank'>
                    
                <img src={gm} alt="Gmail de Rodrigo" className='imagen gm'/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5491127003616&text=Hola vi tu portfolio y queria comunicarme contigo" target='blank'>
                <img src={wh} alt="Whatsapp de Rodrigo" className='imagen wh'/>
                </a>

                <a href="https://www.instagram.com/rodrigo_ezequiel/">
                    <img src={ig} alt="Instagram de Rodrigo" className='imagen ig'/>
                </a>
            </div>
        </div>
    )
}