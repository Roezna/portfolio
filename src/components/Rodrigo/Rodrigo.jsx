import './Rodrigo.scss'
import Carousel from '../Carousel/Carousel';

export default function Rodrigo(){

    function calcularEdad(fecha) {
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return edad;
    }

    return(
        <div id='rodrigo'>
           
           <span className='titulo'>Quien soy</span>

           <div className='resumen'>
               <div className='textoPrevio'>
                <span className='intro'>Tengo {calcularEdad('11/04/1999')} años, vivo en Buenos Aires y tengo el placer de contarte
                     que soy programador, busco perfeccionar mis conocimientos día a día
                      para lograr crecer.</span>
                </div>

                <Carousel />

           </div>

        </div>
    )
}