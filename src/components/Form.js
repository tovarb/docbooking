import React, { Fragment, useState } from 'react';

const Form = () => {

    //Create state of appointment

    const [appointment, updateAppointment] = useState({
        name: '',
        reasonVisit: '',
        date: '',
        time: '',
        comments: '',
    })

    //State of error

    const [ error, updateError] =useState(false);

    //Function that update the state
    const updateState = e => {

        updateAppointment({
            ...appointment,
            [e.target.name] : e.target.value,
        })
    }

    //Taking the values
    const { name, reasonVisit, date, time, comments } = appointment;

    //User books the appointment

    const submitAppointment = e => {
        e.preventDefault();

        //Validation
       if(name.trim() === '' || reasonVisit.trim() === '' || date.trim() === '' || time.trim() === '' || comments.trim() === '' ){ 
            updateError(true);

            return;
        }

        //Assign an ID

        //Create the appointment

        //Restart the form
    }

    return ( 
        <Fragment>
            <h2>Book an appointment</h2>

            <form
                onSubmit={submitAppointment}
            >
                <label>What's your name?</label>
                <input
                    type="text"
                    name="name"
                    className="u-full-width"
                    placeholder="Full name"
                    onChange={updateState}
                    value={name}
                />
                
                <label>What´s the reason for your visit?</label>
                <input
                    type="text"
                    name="reasonVisit"
                    className="u-full-width"
                    placeholder="Illness, ENT Consultation, etc"
                    onChange={updateState}
                    value={reasonVisit}
                />

                <label>Select the day of your appointment</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={updateState}
                    value={date}
                />

                <label>Select the time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={updateState}
                    value={time}
                />

                <label>Additional comments</label>
                <textarea
                    className="u-full-width"
                    name="comments"
                    onChange={updateState}
                    value={comments}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Book the appointment
                </button>

                { error ? <small className="alert-error">* All the fields are required</small> : null}
            </form>

        </Fragment>
     );
}
 
export default Form;