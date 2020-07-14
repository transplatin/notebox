import { useState } from "react";
import URL from "./URL";

const useVerifyOTP = () => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const VerifyOTP = async (otp) => {
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
  return [VerifyOTP,response, error];
};

export default useVerifyOTP;
