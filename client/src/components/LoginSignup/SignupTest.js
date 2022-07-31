import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";
import LogStyle from "./LoginForm.module.css";

function SignupTest() {
  const [data, setData] = useState({
    email: "",
    password: "",
    retypepass: "",
    phone: "",
  });
  const [error, setError] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validate(data));

    console.log(error);
    if (Object.keys(error).length === 0) {
      setIsSubmit(true);
    }

    if (isSubmit) {
      try {
        const url = "http://localhost:5000/api/users";
        const { data: res } = await axios.post(url, data);
        navigate("/login");
        console.log(res.message);
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setServerError(error.response.data.message);
          console.log(error);
          setIsSubmit(false);
        }
      }
    }
  };

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(data);
    }
  }, [error]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password must be at least 8 characters, contains an uppercase letter, a number and a symbol!";
    }
    if (!values.retypepass) {
      errors.retypepass = "Retype Password is required!";
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
        <form className="signup">
          <h1 className={LogStyle.title}>Registration</h1>
          <div className={LogStyle.input}>
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            {error.email && <div className={LogStyle.error}>{error.email}</div>}
            {serverError && <div className={LogStyle.error}>{serverError}</div>}
          </div>
          <div className={LogStyle.input}>
            <label htmlFor="password">Password</label>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <div className={LogStyle.error}>{error.password}</div>
          </div>
          <div className={LogStyle.input}>
            <label htmlFor="password">Retype Password</label>
            <div>
              <input
                type="password"
                name="retypepass"
                id="retypepass"
                value={data.retypepass}
                onChange={handleChange}
              />
            </div>
            <div className={LogStyle.error}>{error.retypepass}</div>
          </div>
          <div className={LogStyle.input}>
            <label htmlFor="password">Phone Number</label>
            <div>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={data.phone}
                onChange={handleChange}
              />
            </div>
            <div className={LogStyle.error}>{error.phone}</div>
          </div>
          <button
            className={LogStyle.btn}
            type="submit"
            name="login"
            value="Login"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <div className={LogStyle.switch}>
            Have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupTest;
