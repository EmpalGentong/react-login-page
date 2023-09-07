const LoginForm = () => {
  return (
    <div className="card cardForm">
      <form>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            aria-describedby="emailHelp"
          ></input>
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="Password"></input>
        </div>
        <div className="button">
          <button type="submit" className="center btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
