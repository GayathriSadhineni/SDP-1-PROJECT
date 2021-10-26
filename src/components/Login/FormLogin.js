import React from 'react';
import validate from './Validateinfo';
import useForm2 from './useForm2';
import './Form.css';

const FormLogin= ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm2(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Log in
        </h1>
       
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Log In
        </button>
        <span className='form-input-login'>
          Forgot Password?<a href='#'>Reset Here</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;