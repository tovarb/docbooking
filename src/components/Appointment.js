import React from 'react';

const Appointment = ({appointment, deleteAppointment}) => ( 
    <div className="appointment">
        
        <p> Patient: <span>{appointment.name}</span></p>
        <p> Reason for the visit: <span>{appointment.reasonVisit}</span></p>
        <p> Date: <span>{appointment.date}</span></p>
        <p> Time: <span>{appointment.time}</span></p>
        <p> Additional Comments: <span>{appointment.comments}</span></p>

        <button
            className="button delete u-full-width"
            onClick={ () => deleteAppointment(appointment.id)}
        >
            Delete &times;
        </button> 

    </div>

 );
 
export default Appointment;