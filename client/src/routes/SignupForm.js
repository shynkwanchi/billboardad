import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogStyle from "../components/LoginForm.module.css";

function SignupForm() {
  const initialValues = { email: "", password: "", retypepass: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setIsSubmit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password must be 8 or more characters and contain at least an uppercase letter, a number and a special character.";
    }

    if (!values.password) {
      errors.retypepass = "Retype pasword is required!";
    } else if (values.password !== values.retypepass) {
      errors.retypepass = "Password does not match!";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }

    return errors;
  };
  return (
    <div className={LogStyle.box}>
      <div className={LogStyle.form}>
        <form className="signup" onSubmit={handleSubmit}>
          <h1 className={LogStyle.title}>Registration</h1>
          <div className={LogStyle.input}>
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className={LogStyle.error}>{formErrors.email}</div>
          </div>
          <div className={LogStyle.input}>
            <label htmlFor="password">Password</label>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <div className={LogStyle.error}>{formErrors.password}</div>
          </div>
          <div className={LogStyle.input}>
            <label htmlFor="password">Retype Password</label>
            <div>
              <input
                type="password"
                name="retypepass"
                id="retypepass"
                value={formValues.retypepass}
                onChange={handleChange}
              />
            </div>
            <div className={LogStyle.error}>{formErrors.retypepass}</div>
          </div>
          <div className={LogStyle.input}>
            <label htmlFor="password">Phone Number</label>
            <div>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formValues.phone}
                onChange={handleChange}
              />
            </div>
            <div className={LogStyle.error}>{formErrors.phone}</div>
          </div>
          <button
            className={LogStyle.btn}
            type="submit"
            name="login"
            value="Login"
          >
            Login
          </button>
          <div className={LogStyle.switch}>
            Have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
