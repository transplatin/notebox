import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Text, Input, Button } from "galio-framework";
import styles from "../constant/Style";
import LoginPost from "../hooks/LoginPost";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Login, result, error] = LoginPost();
  if (result.length > 0) {
    navigation.replace("Home");
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
          onPress={() => Login(username, password)}
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

export default Login;
