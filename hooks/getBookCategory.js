import { useState,useEffect } from "react";
import URL from "./URL";
import * as SecureStore from "expo-secure-store"

const getBookCategory = (type) => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const loadCategory = async () => {
    try {
      const credentials = await SecureStore.getItemAsync('user');
      const user = JSON.parse(credentials);
      let params= new FormData();
      params.append("getbook","ok");
      params.append("uid",user.uid);
      params.append("phone",user.phone);
      params.append("authtoken",user.authtoken);
      params.append("type",type);
      let result = await URL({
        method: 'post',
        url: '/getcategory.php',
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
    loadCategory();
  }, [])
  return [loadCategory,response, error];
};

export default getBookCategory;
