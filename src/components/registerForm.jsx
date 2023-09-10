const RegisterForm = () => {
  const handlleSubmit = (e) => {
    e.preventDefault();
    const documents = document.forms[0];
    const name = documents.elements["name"].value;
    const email = documents.elements["email"].value;
    const password = documents.elements["password"].value;
    // console.log(document.forms[0]);
    setTimeout(() => {
      fetch("http://localhost:4500/getall")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }, 1000);

    console.log(name, email, password);
  };

  return (
    <div className="card cardForm">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name Here
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            name="name"
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
            required
            type="email"
            name="email"
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
          <input
            required
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
