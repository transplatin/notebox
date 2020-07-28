import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Text, Input, Button } from "galio-framework";
import styles from "../constant/Style";
import useSignUp from "../hooks/useSignUp";
import * as SecureStore from "expo-secure-store";

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [beta, setBeta] = useState("");
  const [SignUp, result, error] = useSignUp();
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
          Register
        </Text>
      </View>
      <View style={styles.footer}>
        <Input
          value={username}
          onChangeText={(e) => setUsername(e)}
          style={[styles.input, { marginTop: 80 }]}
          placeholder="Username"
        />
        <Input
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.input}
          placeholder="Email"
        />
        <Input
          value={phone}
          onChangeText={(e) => setPhone(e)}
          style={styles.input}
          maxLength={10}
          placeholder="Phone"
          keyboardType="phone-pad"
        />
        <Input
          value={password}
          onChangeText={(e) => setPassword(e)}
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <Input
          value={beta}
          onChangeText={(e) => setBeta(e)}
          style={styles.input}
          maxLength={7}
          placeholder="Beta Code"
        />
        {error ? (
          <Text p color="red">
            {error}
          </Text>
        ) : null}
        <Button
          onPress={() => {
            if (verifyDetails(username, email, phone, password, beta)) {
              SignUp(username, email, phone, password);
            }
          }}
          color={styles.baseColor}
          style={styles.input}
        >
          Register
        </Button>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
          }}
        >
          <Text p muted>
            Already have an account ?{" "}
          </Text>
          <TouchableWithoutFeedback onPress={() => navigation.pop()}>
            <Text color={styles.baseColor} p>
              Login
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const verifyDetails = (username, email, phone, password, beta) => {
  var usernameRegex = /^[a-zA-Z0-9]+$/;
  var emailRegex = /\S+@\S+\.\S+/;
  var phoneRegex = /^[0-9]{10}$/;
  if (!(username.match(usernameRegex) && username !== "")) {
    alert("Please choose a valid username");
    return false;
  } else if (!(email.match(emailRegex) && email !== "")) {
    alert("Please choose a valid email");
    return false;
  } else if (!(phone.match(phoneRegex) && phone != "")) {
    alert("Please choose a valid phone number");
    return false;
  } else if (!(password != "")) {
    alert("Please choose a password");
    return false;
  } else if (beta != "BETA100") {
    alert("Sorry the beta code you entered is Invalid.");
    return false;
  }
  return true;
};

export default SignUp;
