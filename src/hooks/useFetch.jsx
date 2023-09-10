import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDatas(data);
      })
      .catch((e) => {
        console.log("gagal" + e);
      });
  }, [url]);

  return { datas };
};

export default useFetch;
