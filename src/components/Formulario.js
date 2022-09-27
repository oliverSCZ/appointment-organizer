import React, { Fragment, useState } from 'react';

const Formulario = () => {

const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
});

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
  console.log('enviando form')

}

  return ( 
    <Fragment>
      <h2> Create appointment</h2>
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