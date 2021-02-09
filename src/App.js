import React, { Fragment } from 'react';
import Form from './components/Form';

function App() {
  return (
    <Fragment>
        <h1>Doc Booking</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              Doctor profile
            </div>
            <div className="one-half column">
              <Form />
            </div>
          </div>
        </div>

    </Fragment>
  );
}

export default App;
