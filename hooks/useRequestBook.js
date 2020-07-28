import { useState } from "react";
import URL from "./URL";
import * as SecureStore from "expo-secure-store"

const useRequestBook = () => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const RequestBook = async (author,type,book) => {
    try {
      const credentials = await SecureStore.getItemAsync('user');
      const user = JSON.parse(credentials);
      let params= new FormData();
      params.append("book_request","ok");
      params.append("uid",user.uid);
      params.append("phone",user.phone);
      params.append("authtoken",user.authtoken);
      params.append("book",book);
      params.append("author",author);
      params.append("type",type);
      let result = await URL({
        method: 'post',
        url: '/requestbook.php',
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
  return [RequestBook,response, error];
};

export default useRequestBook;