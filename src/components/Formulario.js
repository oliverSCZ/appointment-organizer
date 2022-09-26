import React, { Fragment } from 'react';

const Formulario = () => {
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
          />
          <label>Owner Name</label>
          <input 
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder='Name of the owner'
          />
          <label>Date</label>
          <input 
          type="date"
          name="fecha"
          className="u-full-width"
          />
          <label>Hour</label>
          <input 
          type="time"
          name="hora"
          className="u-full-width"
          />
          <label>Symptom</label>
          <textarea
          className='u-full-width'
          name='sintomas'
          
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