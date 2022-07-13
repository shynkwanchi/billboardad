import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogStyle from "../components/LoginForm.module.css";

function LoginForm() {
  const initialValues = { email: "", password: "" };
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
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /\S+@\S+\.\S+/;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }

    return errors;
  };

  const displayErrors = (err) => {
    if (err) {
      return <div className={LogStyle.error}>{err}</div>;
    }
  };

  return (
    <div className={LogStyle.box}>
      <div className={LogStyle.form}>
        <form className="login" onSubmit={handleSubmit}>
          <h1 className={LogStyle.title}>Login</h1>
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
            {displayErrors(formErrors.email)}
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
            {displayErrors(formErrors.password)}
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
            Don't have an account? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
