import React, { useState } from "react";
import "./Form.css";
import FormLogin from "./FormLogin";
import FormSuccess from "./FormSuccess";

import validate from "./Validateinfo";
import useForm from "./useForm";

const Form2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div>
      <div className="form-cont">
        <video src="Videos/signuppage.mp4" autoPlay loop muted />
        <div className="form-container">
          <div className="form-content-left">
            <form onSubmit={handleSubmit} className="form" noValidate>
              <h1>
                By creating an account or logging in, you agree to Rentify’s
                Conditions of Use and Privacy Policy.
              </h1>
              <div className="form-inputs">
                <label className="form-label">Username</label>
                <input
                  className="form-input"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
              </div>
              <div className="form-inputs">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className="form-inputs">
                <label className="form-label">Password</label>
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className="form-inputs">
                <label className="form-label">Confirm Password</label>
                <input
                  className="form-input"
                  type="password"
                  name="password2"
                  placeholder="Confirm your password"
                  value={values.password2}
                  onChange={handleChange}
                />
                {errors.password2 && <p>{errors.password2}</p>}
              </div>
              <button className="form-input-btn" type="submit">
                Sign up
              </button>
            </form>
          </div>
          {!isSubmitted ? (
            <FormLogin submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form2;
