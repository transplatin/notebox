import { useState,useEffect } from "react";
import URL from "./URL";
import * as SecureStore from "expo-secure-store"

const getBook = (type,cid) => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const getBookList = async (customtype) => {
    try {
      const credentials = await SecureStore.getItemAsync('user');
      const user = JSON.parse(credentials);
      let params= new FormData();
      params.append("getbook","ok");
      params.append("uid",user.uid);
      params.append("phone",user.phone);
      params.append("authtoken",user.authtoken);
      params.append("type",type);
      params.append("cid",cid);
      let result = await URL({
        method: 'post',
        url: '/getbook.php',
        data: params
      });
      if (typeof result.data === "string") {
        setError(result.data);
      } else {
        setResponse(result.data);
        setError("");
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
