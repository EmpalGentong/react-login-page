// import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "../css/all.css";

const AllData = () => {
  const { datas } = useFetch("http://localhost:4500/getAll");

  return (
    <>
      <h2>All user</h2>
      {datas.map((data) => {
        const urll = `/getdata/${data.id}`;
        return (
          <div key={data.id} className="link-detailed">
            {">"}
            <Link className="link-detailed" to={urll}>
              {data.id + "   " + data.email}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default AllData;
