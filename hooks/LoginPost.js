import { useState } from "react";
import URL from "./URL";

const LoginPost = () => {
  const [loginResponse, setLoginResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const Login = async (username,password) => {
    try {
      let result = await URL.get(`/users`);
      
      if (typeof result.data === "string") {
        setError(result.data);
      } else {
        setLoginResponse(result.data);
      }
    } catch (e) {
      setError(e.message);
    }
  };
  return [Login,loginResponse, error];
};

export default LoginPost;
