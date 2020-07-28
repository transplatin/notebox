import { useState } from "react";
import URL from "./URL";
import * as SecureStore from "expo-secure-store"

const useChangePass = () => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const ChangePass = async (pwd1,pwd2) => {
    try {
      const credentials = await SecureStore.getItemAsync('user');
      const user = JSON.parse(credentials);
      let params= new FormData();
      params.append("changepass","ok");
      params.append("uid",user.uid);
      params.append("phone",user.phone);
      params.append("authtoken",user.authtoken);
      params.append("pwd1",pwd1);
      params.append("pwd2",pwd2);
      let result = await URL({
        method: 'post',
        url: '/changepass.php',
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
  return [ChangePass,response, error];
};

export default useChangePass;
