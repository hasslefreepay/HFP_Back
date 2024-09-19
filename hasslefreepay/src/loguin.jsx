import './css/Loguin.css'; // Asegúrate de importar tu archivo CSS
import { IoIosArrowRoundForward, IoIosUnlock, IoIosAlbums, IoIosCard, IoIosTrendingUp } from "react-icons/io";
import customIcon from './assets/icono.png';
import React, { useState } from 'react';

export function Loguin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Realiza una solicitud para obtener el usuario por correo electrónico
      const response = await fetch(`http://127.0.0.1:8000/api/users/?correo=${email}`);
      const users = await response.json();
      
      // Verifica si el usuario existe
      if (users.length === 0) {
        setError('El correo electrónico no está registrado.');
        return;
      }else{
        console.log('si exist')
      }
      
      // Compara la contraseña
      const user = users[0];
      if (user.contraseña === password) {
        setSuccess('Inicio de sesión exitoso.');
        setError('');
        console.log('entro')
        // Aquí podrías redirigir al usuario a una página diferente o almacenar el token de sesión
      } else {
        setError('Contraseña incorrecta.');
        setSuccess('');
      }
      
    } catch (error) {
      console.error('Error:', error);
      setError('Hubo un error al iniciar sesión.');
      setSuccess('');
    }
  };


  return (
    <>

    <div className='f'>

    <div >
      <section id='loguin'>
        
      <div className='cont3' >
      <img src={customIcon} alt="Custom Icon" style={styles.icon} />

    <h1 className='text2'>HassleFreePay</h1>
    </div>

    <form onSubmit={handleSubmit}>
    <div className='cont5'>
    <div className='cont4'>

      
        <div>
            <label htmlFor="" className='text3'>User name</label>
            <br />
            <br />
            <input
                type="email"
                className='input'
                id="email"
                placeholder='User name'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />        <br />

        <div>
          <div className='ctn'>
            <div className='left1'>
            <label htmlFor="" className='text3'>Password</label>
            </div>
            <div className='right1'>
            <a href="/registro" className='link'>Olvide mi contraseña</a>
            </div>
          </div>
          <input
                type="password"
                className='input'
                id="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />            <br />
        <br />
        </div>
        </div>
        
        {error && <p className='error-message'>{error}</p>}
        {success && <p className='success-message'>{success}</p>}
        
        
    </div>
    
    </div>
    <br />

    <div className='cont5'>
    <div className='car2'>
    <button type="submit" className='ba'>
                  <h1 className='text'>Empezar</h1>
                  <IoIosArrowRoundForward size={24} color="white" className='r2' />
                </button>
                
    </div>

    

    </div>
    </form>
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
