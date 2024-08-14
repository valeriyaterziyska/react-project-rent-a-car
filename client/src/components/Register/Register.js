export const Register = () => {
  return (
    <section id="registerPage">
      <form id="registerForm">
        <h2>Register Form</h2>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Email" />
        </div>
        <div>
          <div className="error-message">Email is required!</div>
          <div className="error-message">Email is invalid!</div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <div className="error-message">Password is required!</div>
          <div className="error-message">Password is shoter than 20 characters</div>
        </div>

        <button type="submit" className="register">
          Register
        </button>
      </form>
    </section>
  );
};
