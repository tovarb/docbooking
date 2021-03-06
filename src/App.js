import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  //Appointments saved in Local Storage

  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!initialAppointments){
    initialAppointments = [];
  }


  //Appointments programmed
  const [appointments, saveAppointments] = useState([]);

  useEffect( () => {
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
    
    if(initialAppointments){
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments]);

  //Appointment management
  const createAppointment = appointment => {
      saveAppointments([
        ...appointments,
        appointment
      ]);
  } 

  //Deleting an appointment by Id
   const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id);
    saveAppointments(newAppointments);
   }

   //Conditional title
   const title = appointments.length === 0 ? '' : 'Appointments programmed';

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
              <h4>{title}</h4>
                  {appointments.map(appointment => (
                    <Appointment 
                    key = {appointment.id}
                    appointment = {appointment}
                    deleteAppointment = {deleteAppointment}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

    </Fragment>
  );
}

export default App;
