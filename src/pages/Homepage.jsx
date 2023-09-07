// import { useState } from "react";

import "../css/Homepage.css";
import "../css/all.css";
import Navbar from "../components/navbar";

const Card = () => {
  return (
    <div className="container">
      <div className="card mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Register</h5>
          <p className="card-text">Register your new Account</p>
          <a href="/register" className="btn btn-primary">
            Click Here To Register
          </a>
        </div>
      </div>

      <div className="card mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <p className="card-text">Login With Your Account</p>
          <a href="/login" className="btn btn-primary">
            Click here to Login
          </a>
        </div>
      </div>
    </div>
  );
};

function Homepage() {
  return (
    <>
      <Navbar />
      <h1 className="welcome text-center">Welcome to this starter project</h1>
      <Card />
    </>
  );
}

export default Homepage;
