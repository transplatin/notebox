import { useState } from "react";
import URL from "./URL";

const useChangePass = () => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const ChangePass = async (pwd1,pwd2) => {
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
  return [ChangePass,response, error];
};

export default useChangePass;
