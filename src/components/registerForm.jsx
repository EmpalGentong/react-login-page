const RegisterForm = () => {
  return (
    <div className="card cardForm">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name Here
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
          ></input>
          <div id="nameHelp" className="form-text">
            Let us know you
          </div>
        </div>
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
