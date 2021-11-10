
import './App.css';
import Header from './components/Header/Header';
import Navegacion from './components/Nav/Nav';
import Proyectos from './components/Proyectos/Proyectos';
import Rodrigo from './components/Rodrigo/Rodrigo';

function App() {
  return (
    <div className="App">
     
     <Navegacion />
     <Header />
     <Rodrigo /> 
     <Proyectos />

    </div>
  );
}

export default App;
