import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema';
import './App.css';

function App() {


  function onSubmit(values, actions) {
    console.log('VALUES', values);
  }

  return (
    <div className="App">
      <Formik       
     validationSchema={schema}     
      onSubmit={onSubmit}
      validateOnBlur 
      
      initialValues={{
          name: '',
          email: ''
        }}
        >
        
        {({ isValid }) => (      
          <div className="container">
            <div className="row">
              <h1>Formik basic example Form</h1>
            </div>
            <div className="row">
              <Form>
                <div>
                  <label>Nome</label>
                  <Field name="name" type="text" className="field-input"/>
                  <ErrorMessage name="name" className="badge-error" />
                </div>
                <div>
                  <label>Email</label>
                  <Field name="email" type="email" className="field-input"/>
                  <ErrorMessage name="email" className="badge-error" />       
                </div>
                <button className="btnSubmit" type="submit" disabled={!isValid}>Salvar</button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default App;
