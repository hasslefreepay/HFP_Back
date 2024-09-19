import './css/registro.css'; // Asegúrate de importar tu archivo CSS
import React, { useState } from 'react';

export function Registro() {
  const [formData, setFormData] = useState({
    name: '',
    lname: '',
    email: '',
    password: '',
    rpassword: '',
    number: '',
    country: '',
    department: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (event) => {
    setFormData({
      ...formData,
      country: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log()
    if (formData.password !== formData.rpassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    const { rpassword, ...dataToSend } = formData;
    dataToSend.number = parseInt(dataToSend.number, 10) || 0;
    dataToSend.postalCode = parseInt(dataToSend.postalCode, 10) || 0;

    const formattedData = {
      nombre: dataToSend.name,
      apellidos: dataToSend.lname,
      correo: dataToSend.email,
      contraseña: dataToSend.password,
      telefono: parseInt(dataToSend.number, 10) || 0, // Convertir a entero
      pais: dataToSend.country,
      departamento: dataToSend.department,
      ciudad: dataToSend.city,
      codp: dataToSend.postalCode,
    };

    console.log(formattedData)


    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }

      const result = await response.json();
      console.log('Respuesta de la API:', result);
      // Puedes manejar la respuesta de la API aquí
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>

    <div className='f2'>

        <div className='cuerpo'>
            <div></div>

        <h1 className='tt2'>Informacion personal</h1>
        <p className='p'>esta informacion aparecera en tu perfil</p>

        <br />
        <br />
                <br />
        <form onSubmit={handleSubmit}>
            <div className='se'>
                <div className='lt2'>
                <label htmlFor="" className='tt3'>Primer nombre</label>
                <br />
                
                <input type="text"  className='input2' 
          name="name"
          value={formData.name}
          onChange={handleChange}/>

                </div>

                <div className='rt2'>
                <label htmlFor="" className='tt3'>Segundo nombre</label>
                <input
            type="text"
            className='input2'
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />

                </div>
            </div>
            <br />
            <br />
            <label htmlFor="" className='tt3'>Correo Electronico</label>
            <br />
            <input
        type="email"
        className='input3'
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

            <br />
            <br />
            <label htmlFor="" className='tt3'>Contraseña</label>
            <br />        
            <input
        type="password"
        className='input3'
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

            <br />
            <br />
            <label htmlFor="" className='tt3'>Repita Contraseña</label>
            <br />            
            <input
        type="password"
        className='input3'
        id="rpassword"
        name="rpassword"
        value={formData.rpassword}
        onChange={handleChange}
      />

            <br />
            <br />
            <label htmlFor="" className='tt3'>Telefono</label>
            <br />            
            <input type="number"
        className='input3'
        id="number"
        name="number"
        value={formData.number}
        onChange={handleChange}/>

            <br />
            <br />
            <label htmlFor="" className='tt3'>Pais</label>
            <br />            
            <select
        id="country"
        className='input2'
        name="country"
        value={formData.country}
        onChange={handleSelectChange}
      >
            <option value="">Selecciona un país</option>
            <option value="USA">Estados Unidos</option>
            <option value="CAN">Canadá</option>
            <option value="MEX">México</option>
            </select>
            <br />
            <br />
            <div className='se2'>
                <div className='lt3'>
                <label htmlFor="" className='tt3'>Departamento</label>
                <br />
                <input
            type="text"
            className='input4'
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />

                </div>

                <div className='ct3'>
                <label htmlFor="" className='tt3'>Ciudad</label>
                <input
            type="text"
            className='input4'
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
                </div>

                <div className='rt3'>
                <label htmlFor="" className='tt3'>Codigo postal</label>
                <input
            type="text"
            className='input4'
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
                </div>
            </div>
            <br />
            <hr />
            <br />
            <input
        type="checkbox"
        className='che'
        id="acceptTerms"
      />            <label htmlFor="" className='p'> Acepto </label>
            <a href="" className='ln'>Terminos y condiciones</a>

            <br />
            <br />
            <br />
            <input type="submit" className='boton' />



        </form>

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
