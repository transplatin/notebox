import { useState } from "react";
import URL from "./URL";
import * as SecureStore from "expo-secure-store"

const useSendFeedBack = () => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const SendFeedBack = async (name,feedback) => {
    try {
      const credentials = await SecureStore.getItemAsync('user');
      const user = JSON.parse(credentials);
      let params= new FormData();
      params.append("feedback","ok");
      params.append("uid",user.uid);
      params.append("phone",user.phone);
      params.append("authtoken",user.authtoken);
      params.append("feedback",feedback);
      params.append("name",name);
      let result = await URL({
        method: 'post',
        url: '/feedback.php',
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
  return [SendFeedBack,response, error];
};

export default useSendFeedBack;