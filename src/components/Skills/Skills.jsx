import './Skills.scss'
import css from '../../images/skills/CSS.png';
import html from '../../images/skills/html.png';
import js from '../../images/skills/js.png';
import node from '../../images/skills/node.png';
import postgresql from '../../images/skills/postgresql.png';
import react from '../../images/skills/react.png';
import redux from '../../images/skills/redux.png';
import sass from '../../images/skills/sass.png';
import sequelize from '../../images/skills/sequelize.png';



export default function Skills(){

    return (
        <div  id='skills'>
            <span className='titulo'>Habilidades</span>

            <div className='textoPrevio'>
                <span className='intro'>Estas son algunas de las tecnologías en las cuales puedo desarrollar</span>
            </div>

            <div className='habilidades'>
                    <img src={html} alt="" className='imagen html'/>
                    <img src={css} alt="" className='imagen css'/>
                    <img src={js} alt="" className='imagen js'/>
                    <img src={react} alt="" className='imagen react'/>
                    <img src={redux} alt="" className='imagen redux'/>
                    <img src={sass} alt="" className='imagen sass'/>
                    <img src={node} alt="" className='imagen node'/>
                    <img src={postgresql} alt="" className='imagen postgresql'/>
                    <img src={sequelize} alt="" className='imagen sequelize'/>
            </div>
        </div>
    )
}