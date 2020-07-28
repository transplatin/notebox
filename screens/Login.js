import React, { useState ,useEffect} from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Text, Input, Button } from "galio-framework";
import styles from "../constant/Style";
import LoginPost from "../hooks/LoginPost";
import * as SecureStore from "expo-secure-store";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Login, result, error] = LoginPost();
  const getKeys = async () => {
    try {
      const credentials = await SecureStore.getItemAsync("user");
      const user = JSON.parse(credentials);
      if(user){
       navigation.replace("Main")
      }else{
        console.log("maiin run")
      }
    } catch (e) {
      console.error(e);
      navigation.replace("Auth");
    }
  };
  useEffect(() => {
   getKeys();
  }, [])
  if (result.length > 0) {
    const detailStore = async () => {
      try {
        await SecureStore.setItemAsync("user", JSON.stringify(result[0]));
        navigation.replace("Main");
      } catch (e) {
        console.log(e);
      }
    };
    detailStore();
    
  }
  return (
    <View style={[styles.container, { backgroundColor: styles.baseColor }]}>
      <View style={styles.header}>
        <Text h1 color="white">
          Login
        </Text>
      </View>
      <View style={styles.footer}>
        <Input
          value={username}
          onChangeText={(e) => setUsername(e)}
          style={[styles.input, { marginTop: 80 }]}
          placeholder="Email, Phone or Username"
        />
        <Input
          value={password}
          onChangeText={(e) => setPassword(e)}
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        {error ? (
          <Text p color="red">
            {error}
          </Text>
        ) : null}

        <Button
          onPress={() => {
            if (verifyDetails(username, password)) {
              Login(username, password);
            }
          }}
          color={styles.baseColor}
          style={styles.input}
        >
          Login
        </Button>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
          }}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text p muted>
                Don't have an account ?{" "}
              </Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.push("SignUp")}
              >
                <Text p color={styles.baseColor}>
                  Sign Up
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.troubleSignInText}>
              <TouchableWithoutFeedback
                onPress={() => navigation.push("ForgetPass")}
              >
                <Text p color={styles.baseColor}>
                  Forget Password ?
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const verifyDetails = (username, password) => {
  if (username == "") {
    alert("Username cannot be empty !");
    return false;
  } else if (password == "") {
    alert("Password cannot be empty ");
    return false;
  }
  return true;
};
export default Login;
