import './App.css';
import Contacto from './components/Contacto/Contacto';
import Header from './components/Header/Header';
import Navegacion from './components/Nav/Nav';
import Proyectos from './components/Proyectos/Proyectos';
import Rodrigo from './components/Rodrigo/Rodrigo';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
     
     <Navegacion />
     <Header />
     <Rodrigo /> 
     <Proyectos />
     <Skills />
     <Contacto /> 

    </div>
  );
}

export default App;
