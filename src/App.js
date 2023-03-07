import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import clicks from './imagenes/clicks.png';
import { useState } from 'react';


function App() {

  const [numclicks, setNumClicks] = useState(0);

  const manejarClick = () =>{
    setNumClicks(numclicks + 1);
    }
  const reiniciarContador = () =>{
      setNumClicks(0);
    }
  
  return (
    <div className="App">
      <div className='click-logo-contador'>
        <img
            className='click-logo'
            src={clicks}
            alt= 'logo de click'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numclicks= {numclicks} />
        <Boton
          texto='click'
          esBotonDeClick={true}
          manejarClick={manejarClick}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}/>
      </div>
      
    </div>
  );
}

export default App;
