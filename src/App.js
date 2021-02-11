import React, { Fragment, useState } from 'react';
import Form from './components/Form';

function App() {

  //Appointments programmed
  const [appointments, saveAppointments] = useState([]);

  //Appointment management
  const createAppointment = appointment => {
      saveAppointments([
        ...appointments,
        appointment
      ]);
  } 


  return (
    <Fragment>
        <h1>Doc Booking</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              Doctor profile
            </div>
            <div className="one-half column">
              <Form 
                createAppointment = {createAppointment}
              />
              <div>
                <h3>Appointments programmed</h3>
              </div>
            </div>
          </div>
        </div>

    </Fragment>
  );
}

export default App;
