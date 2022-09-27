import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
});
// Agregando un state para el error
  const [error, actualizarError ] = useState(false)



// funcion que se ejecuta cada que el usuario escribe en un input
const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
}
// Extraer los valores
const { mascota, propietario, fecha, hora, sintomas } = cita;

// cuando el usuario presione create

const submitCita = (e) => {
  e.preventDefault();


  //validar el formulario
  if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
      actualizarError(true);
      return;
  }
  //Eliminar el mensaje previo

      actualizarError(false)

  // Asignar un ID
    cita.id = uuidv4();
    console.log(cita);

  // Crear la cita
    crearCita(cita);
  // Reiniciar el form
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
}

  return ( 
    <Fragment>
      <h2> Create appointment</h2>
      { error ? <p className="alerta-error">All the fields need to be filled</p>
      : null }

      <form
      onSubmit={submitCita}
      >
          <label> Pet Name</label>
          <input 
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Name of the pet"
            onChange={handleChange}
            value={mascota}
          />
          <label>Owner Name</label>
          <input 
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder='Name of the owner'
          onChange={handleChange}
          value={propietario}
          />
          <label>Date</label>
          <input 
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
          />
          <label>Hour</label>
          <input 
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
          />
          <label>Symptom</label>
          <textarea
          className='u-full-width'
          name='sintomas'
          onChange={handleChange}
          value={sintomas}
          ></textarea>
          <button
            type='submit'
            className='u-full-width button-primary'
          >Create</button>

      </form>

    </Fragment>

   );
}
 
export default Formulario;