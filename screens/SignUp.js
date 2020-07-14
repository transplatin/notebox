import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Text, Input, Button } from "galio-framework";
import styles from "../constant/Style";
import useSignUp from "../hooks/useSignUp";

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [SignUp, result, error] = useSignUp();
  if (result.length > 0) {
    navigation.replace("Home");
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
        {error ? (
          <Text p color="red">
            {error}
          </Text>
        ) : null}
        <Button
          onPress={() => {
            if (verifyDetails(username, email, phone, password)) {
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

const verifyDetails = (username, email, phone, password) => {
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
  }
  return true;
};

export default SignUp;
