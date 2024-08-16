import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
  );

  return (
    <section id="registerPage">
      <form id="registerForm" method="POST" onSubmit={onSubmit}>
        <h2>Register Form</h2>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={changeHandler}
          />
        </div>
        {/* <div>
          <div className="error-message">Email is required!</div>
          <div className="error-message">Email is invalid!</div>
        </div> */}

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={changeHandler}
          />
        </div>
        {/* <div>
          <div className="error-message">Password is required!</div>
          <div className="error-message">Password is shoter than 20 characters</div>
        </div> */}

        <button type="submit" className="register">
          Register
        </button>
        <p>
          If you already have profile click <Link to={"/login"}>here</Link>
        </p>
      </form>
    </section>
  );
};
