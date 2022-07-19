import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogStyle from "../components/LoginForm.module.css";
import axios from "axios";
import { set } from "mongoose";

function SignupForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
    retypepass: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setError(error.response.data.message);
        console.log(error);
      }
    }
  };

  return (
    <div className={LogStyle.box}>
      <div className={LogStyle.form}>
        <form className="signup" onSubmit={handleSubmit}>
          <h1 className={LogStyle.title}>Registration</h1>
          {error && <div className={LogStyle.error}>{ error }</div>}
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
          </div>
          <button
            className={LogStyle.btn}
            type="submit"
            name="login"
            value="Login"
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

export default SignupForm;
