import React, { Fragment, useState } from 'react';

const Formulario = () => {

const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
});

const handleChange = () => {
  console.log('escribiendo...')
}



  return ( 
    <Fragment>
      <h2> Create appointment</h2>
      <form>
          <label> Pet Name</label>
          <input 
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Name of the pet"
            onChange={handleChange}
          />
          <label>Owner Name</label>
          <input 
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder='Name of the owner'
          onChange={handleChange}
          />
          <label>Date</label>
          <input 
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          />
          <label>Hour</label>
          <input 
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          />
          <label>Symptom</label>
          <textarea
          className='u-full-width'
          name='sintomas'
          onChange={handleChange}
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