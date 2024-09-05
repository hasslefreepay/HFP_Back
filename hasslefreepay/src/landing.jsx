import { BiColor } from 'react-icons/bi';
import './css/App.css'; // Asegúrate de importar tu archivo CSS
import { IoIosArrowRoundForward, IoIosUnlock, IoIosAlbums, IoIosCard, IoIosTrendingUp } from "react-icons/io";
import '@radix-ui/themes/styles.css';
import { Flex, Text, Button, Heading } from '@radix-ui/themes';;
import React, { useState } from 'react';
import customIcon from './assets/icono.png';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

export function App() {

  const [activeOption, setActiveOption] = useState('option1');

  const handleOptionClick = (option) => {
      setActiveOption(option);
      console.log(option)

      if (option==='option1') {
        const section = document.getElementById('producto');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (option==='option2') {
        const section = document.getElementById('crc');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
  };

  

  return (
    <>

    <div className='fondo'>
    <div className='container'>
    <div className='left'>
    <img src={customIcon} alt="Custom Icon" style={styles.icon} />
    </div>
    <div className="container2">
      
    <h1 className={activeOption === 'option1' ? 'text': 'texti'} onClick={() => handleOptionClick('option1')}>Producto</h1>
    <h1 className={activeOption === 'option2' ? 'text': 'texti'} onClick={() => handleOptionClick('option2')}>Caractiristicas</h1>
    <h1 className={activeOption === 'option3' ? 'text': 'texti'} onClick={() => handleOptionClick('option3')}>Fundación</h1>





      
      
    </div>
    <div className='right'>
      <a href="/loguin" className='a2'>
        <h1 className='text'>Iniciar sesion</h1>
        <IoIosArrowRoundForward size={24} color="white"/>
      </a>
        
    </div>
    </div >
    

    <div >
      <section id='producto'>
      <div className='container3' >
    <h1 className='text2'>HassleFreePay</h1>
    </div>
    <div className='container5'>
    <div className='container4'>
      <p className='text3'>HassleFreePay es una Billetera virtual inovadora capaz de manejar multiples tarjeta con la capacidad de realizar tarnsaccioanes entre ellas</p>
    </div>
    
    </div>
    <div className='container5'>
    <div className='card2'>
    <a href="/Loguin" className='a2'>
        <h1 className='text'>Empezar</h1>
        <IoIosArrowRoundForward size={24} color="white" className='r2'/>
      </a>
    </div>
    </div>
    
      </section>

     
    
    </div>
   

    <div className='alt'></div>

    <section id='crc' >
      <div className='container5'>
      <h1 className='text2'>Caracteristicas</h1>
      </div>

      <div className='container5'>
      <div  className='row' >
      <div className='cleft'>
        <div className='centro'>
        <div className='card'>
          <IoIosTrendingUp className='r'/>
          <p className='text4'>Estadistica de uso</p>
        </div>
        </div>
        <br />
        

        <div className='centro'>
        <div className='card'>
        <IoIosUnlock className='r'/>
        <p className='text4'>nivel avanzado de seguridad</p>
      </div>
        </div>
        
      </div>

      <div className='center'>
        <div className='centro'>
        <div className='card'>
          <IoIosAlbums className='r'/>
          <p className='text4'>Multiples cuentas vinculadas</p>
        </div>
        </div>
        
      </div>

     <div className='cright'>
      <div className='centro'>
      <div className='card'>
         <IoIosCard className='r'/>
          <p className='text4'>Facil vinculación</p>
        </div> 
      </div>
       
     </div>
      
       
    </div>
      </div>
      
    

    
    </section>
    </div>
    
    

    
    
    
   

    
    

    
    
    </>
    
  );
}

const styles = {
  
  icon: {
      width: '4vw', // Cambia el tamaño aquí

  }
};
