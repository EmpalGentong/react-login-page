// import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Homepage.css";
import "../css/all.css";

const Card = () => {
  return (
    <div className="container">
      <div className="card mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Register</h5>
          <p className="card-text">Register your new Account</p>
          <Link to="/register" className="btn btn-primary">
            Click Here To Register
          </Link>
        </div>
      </div>

      <div className="card mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <p className="card-text">Login With Your Account</p>
          <Link to="/login" className="btn btn-primary">
            LOGIN NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

function Homepage() {
  return <Card />;
}

export default Homepage;
