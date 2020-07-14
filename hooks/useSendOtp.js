import { useState } from "react";
import URL from "./URL";

const useSendOTP = () => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const SendOTP = async (email) => {
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
  return [SendOTP,response, error];
};

export default useSendOTP;
