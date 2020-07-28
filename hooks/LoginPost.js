import { useState } from "react";
import URL from "./URL";

const LoginPost = () => {
  const [loginResponse, setLoginResponse] = useState([]); //To get an array object
  const [error, setError] = useState(""); //Error if any
  const Login = async (username,password) => {
    try {
      let params= new FormData();
      params.append("login","ok");
      params.append("username",username);
      params.append("password",password);
      let result = await URL({
        method: 'post',
        url: '/login.php',
        data: params
      });
      if (typeof result.data === "string") {
        setError(result.data);
      } else {
        setLoginResponse(result.data);
        setError("");
      }
    } catch (e) {
      setError(e.message);
    }
  };
  return [Login,loginResponse, error];
};

export default LoginPost;
