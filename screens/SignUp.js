import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Text, Input, Button } from "galio-framework";
import styles from "../constant/Style";

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
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
          placeholder="Phone"
        />
        <Input
          value={password}
          onChangeText={(e) => setPassword(e)}
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <Button
          onPress={() => onRegisterClick(username, email, phone, password)}
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

const onRegisterClick = (username, email, phone, password) => {
  /*Do something on click*/
};

export default SignUp;
