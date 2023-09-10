import { useState } from "react";

const RegisterForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [newUser, setNewUser] = useState("");

  const handlleSubmit = (e) => {
    e.preventDefault();
    const documents = document.forms[0];
    const name = documents.elements["name"].value;
    const email = documents.elements["email"].value;
    const password = documents.elements["password"].value;

    // console.log(document.forms[0]);

    const user = { name, email, password };

    fetch("http://localhost:4500/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 400) {
          throw Error("this email already used");
        }
        return res.json();
      })
      .then((res) => {
        setIsPending(true);

        setNewUser(res.message);
        setIsPending(false);
      })
      .catch((e) => {
        setIsPending(false);
        setNewUser(e.message);
      });
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
          {!isPending && (
            <button
              type="submit"
              onClick={handlleSubmit}
              className="center btn btn-primary"
            >
              Register
            </button>
          )}

          {isPending && (
            <button
              type="submit"
              onClick={handlleSubmit}
              className="center btn btn-primary"
            >
              Registering New User
            </button>
          )}
        </div>
        <p>{newUser}</p>
      </form>
    </div>
  );
};

export default RegisterForm;
