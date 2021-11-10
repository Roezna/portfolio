import './Proyectos.scss'
import gesSalud from '../../images/GesSalud.PNG'
import more from '../../images/more.PNG'
import titato from '../../images/titato.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function Proyectos(){


    const proyecto = [
        {
            title : 'GesSalud',
            tecnologias : 'React, Redux, Node, Express, JavaScript, CSS, Sass, PostgreSql, Sequelize',
            img : gesSalud,
            link : 'https://ges-salud.vercel.app/'
        },
        {
            title : 'More',
            tecnologias : 'React, Redux, Node, Express, JavaScript, CSS, PostgreSql, Sequelize',
            img : more,
            link : 'https://recipes-m0r3.web.app/'
        },
        {
            title : 'Ti-Ta-Tó',
            tecnologias : 'React, JavaScript, CSS',
            img : titato,
            link : 'https://titato-ultimate.web.app/'
        }
    ]

    return (
        <div id='proyectos'>
            <span className='titulo'>Proyectos</span>
            <div className='textoPrevio'>
            <span className='intro'>Estos son algunos de los proyectos que he realizado, la mayoria academicos y algunos por hobbie, 
            donde aporté mi potencial para lograr los objetivos establecidos</span>
            </div>

        <div className='listado'>
                {proyecto.map(elemento => {
                    return (
                        
                 <div className='proyecto' key={elemento.title}>
                        <span className='titulo'>{elemento.title}</span>
                            <img className='imagen' src={elemento.img} alt={elemento.title} />
                            <span className='tecno'>{elemento.tecnologias}</span>
                            <a href={elemento.link} target='blank' className='enlace'><FontAwesomeIcon icon={faEye} className='icon'></FontAwesomeIcon></a>
                        
                
                </div>
                    )
                })}
        </div>

        </div>
    )

}