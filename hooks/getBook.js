import { useState,useEffect } from "react";
import URL from "./URL";

const getBook = () => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const getBookList = async (type) => {
    try {
      let result = await URL.get(`/users`);
      if (typeof result.data === "string") {
        setError(result.data);
      } else {
        setResponse(result.data);
      }
    } catch (e) {
      setError(e.message);
    }
  };
  useEffect(() => {
    getBookList();
  }, [])
  return [getBookList,response, error];
};

export default getBook;
