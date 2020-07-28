import { useState } from "react";
import URL from "./URL";

const useSignUp = () => {
  const [response, setResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const SignUp = async (username,email,phone,password) => {
    try {
      setResponse([]);
      setError("");
      let params= new FormData();
      params.append("signup","ok");
      params.append("username",username);
      params.append("email",email);
      params.append("phone",phone);
      params.append("password",password);
      let result = await URL({
        method: 'post',
        url: '/signup-verify.php',
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
  return [SignUp,response,error];
};

export default useSignUp;