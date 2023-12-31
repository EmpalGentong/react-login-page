// import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const GetData = () => {
  const { id } = useParams();

  const { datas } = useFetch(`http://localhost:4500/getAll/${id}`);

  return (
    <>
      <p key={datas.id}>
        {datas.email + " belongs to " + datas.name + " with id: " + datas.id}
      </p>
    </>
  );
};

export default GetData;
