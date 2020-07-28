import { useState,useEffect } from "react";
import URL from "./URL";
import * as SecureStore from "expo-secure-store"

const useSaveBook = () => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const SaveBook = async (bid,type,name,desc,link,url) => {
    try {
      const credentials = await SecureStore.getItemAsync('user');
      const user = JSON.parse(credentials);
      let params= new FormData();
      params.append("save","ok");
      params.append("uid",user.uid);
      params.append("authtoken",user.authtoken);
      params.append("phone",user.phone);
      params.append("bid",bid);
      params.append("type",type);
      params.append("name",name);
      params.append("desc",desc);
      params.append("link",link);
      params.append("url",url);
      let result = await URL({
        method: 'post',
        url: '/SaveNote.php',
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
  return [SaveBook,response, error];
};

export default useSaveBook;
