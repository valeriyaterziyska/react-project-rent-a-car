import styles from './Login.module.css';

export const Login = () => {
  return (
    <section className={styles.loginPage} id="loginPage">
      <form id="loginForm">
        <h2>Login Form</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Email..." />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password..."
          />
        </div>
        <div>
          <div className="error-message">Password is invalid!</div>
        </div>

        <input type="submit" className="register" value="Login" />
      </form>
    </section>
  );
};
