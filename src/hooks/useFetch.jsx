import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setDatas(data);
        })
        .catch((e) => {
          setDatas({ id: "gagal " + e });
        });
    }, 10);
  }, [url]);

  return { datas };
};

export default useFetch;
