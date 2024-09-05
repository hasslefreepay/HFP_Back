import './css/Loguin.css'; // Asegúrate de importar tu archivo CSS
import { IoIosArrowRoundForward, IoIosUnlock, IoIosAlbums, IoIosCard, IoIosTrendingUp } from "react-icons/io";
import customIcon from './assets/icono.png';

export function Loguin() {

  return (
    <>

    <div className='f'>

    <div >
      <section id='loguin'>
        
      <div className='cont3' >
      <img src={customIcon} alt="Custom Icon" style={styles.icon} />

    <h1 className='text2'>HassleFreePay</h1>
    </div>

    
    <div className='cont5'>
    <div className='cont4'>
        <div>
            <label htmlFor="" className='text3'>User name</label>
            <br />
            <br />
            <input type="text" className='input' placeholder='User name'/><br />
        <br />

        <div>
          <div className='ctn'>
            <div className='left1'>
            <label htmlFor="" className='text3'>Password</label>
            </div>
            <div className='right1'>
            <a href="/registro" className='link'>Olvide mi contraseña</a>
            </div>
          </div>
            <input type="text" className='input' placeholder='Password'/>
            <br />
        <br />
        </div>
        </div>
        

        

    </div>
    
    </div>
    <br />

    <div className='cont5'>
    <div className='car2'>
    <a href="#" className='a2'>
        <h1 className='text'>Empezar</h1>
        <IoIosArrowRoundForward size={24} color="white" className='r2'/>
      </a>
    </div>

    

    </div>

    <br />

    <div className='cont5'>
    <label htmlFor="" className='text4'>No tienes cuenta?   </label>
    <a href="/registro" className='link'> Registrarme</a>


    </div>
    
      </section>
     
    
    </div>
    </div>
    
    
   
     
    </>
    
  );
}

const styles = {
  
  icon: {
      width: '4vw', // Cambia el tamaño aquí

  }
};
