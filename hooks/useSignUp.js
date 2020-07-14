import { useState } from "react";
import URL from "./URL";

const useSignUp = () => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const SignUp = async (name,email,phone,password) => {
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
  return [SignUp,response, error];
};

export default useSignUp;