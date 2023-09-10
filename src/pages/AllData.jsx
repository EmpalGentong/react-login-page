// import { useState } from "react";
import useFetch from "../hooks/useFetch";

const AllData = () => {
  const { datas } = useFetch("http://localhost:4500/getAll");

  return (
    <>
      {datas.map((data) => {
        return <p key={data.id}>{data.email}</p>;
      })}
    </>
  );
};

export default AllData;
