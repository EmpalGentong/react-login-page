const LoginForm = () => {
  const handlleSubmit = (e) => {
    e.preventDefault();
    const documents = document.forms[0];
    const email = documents.elements["email"].value;
    const password = documents.elements["password"].value;
    // console.log(document.forms[0]);

    const object = { email: email, password: password };
    console.log(object);
  };

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
            name="email"
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
          <input
            type="password"
            className="form-control"
            name="password"
            id="Password"
          ></input>
        </div>
        <div className="button">
          <button
            type="submit"
            onClick={handlleSubmit}
            className="center btn btn-primary"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
