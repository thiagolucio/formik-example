import React from 'react';
import { Formik, Field, Form } from 'formik';
import './App.css';

function App() {


  function onSubmit(values, actions) {
    console.log('VALUES', values);
  }

  function validate(values) {    
    const errors= {};
    if(!values.name)
      errors.name = 'Nome é Obrigatório';
    if(!values.email)
      errors.email = 'Email é Obrigatório';
    return errors;
  }

  return (
    <div className="App">
      <Formik       
      onSubmit={onSubmit}
      validateOnBlur
      // validateOnMount  - caso queira mostrar ao montar os avisos de validacao
      validate={validate}
      
      initialValues={{
          name: '',
          email: ''
        }}
        >
        
        {({ errors, touched, isValid }) => (      
          <div className="container">
            <div className="row">
              <h1>Formik and Yup basic example Form</h1>
            </div>
            <div className="row">
              <Form>
                <div>
                  <label>Nome</label>
                  <Field name="name" type="text" className="field-input"/>
                  {errors.name && touched.name && (
                    <div className="badge-error">{errors.name}</div>
                    )}
                </div>
                <div>
                  <label>Email</label>
                  <Field name="email" type="email" className="field-input"/>
                    {errors.email && touched.email && (
                      <div className="badge-error">{errors.email}</div>
                  )}
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
