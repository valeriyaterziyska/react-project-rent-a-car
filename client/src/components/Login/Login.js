import styles from "./Login.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";



import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  Email: 'email',
  Password: 'password',
};

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
      [LoginFormKeys.Email]: '',
      [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

  return (
    <section className={styles.loginPage} id="loginPage">
      <form id="loginForm" method="POST" onSubmit={onSubmit}>
        <h2>Login Form</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Email..."
            name={LoginFormKeys.Email}
            value={values[LoginFormKeys.Email]}
            onChange={changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name={LoginFormKeys.Password}
            placeholder="Password..."
            value={values[LoginFormKeys.Password]}
            onChange={changeHandler}
          />
        </div>

        <input type="submit" className="register" value="Login" />
        <p className="field">
          <span>
            If you don't have profile click <Link to="/register">here</Link>
          </span>
        </p>
      </form>
    </section>
  );
};
