import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Text, Input, Button } from "galio-framework";
import styles from "../constant/Style";

const Login = ({ navigation }) => {
  return (
    <View style={[styles.container, { backgroundColor: styles.baseColor }]}>
      <View style={styles.header}>
        <Text h1 color="white">
          Login
        </Text>
      </View>
      <View style={styles.footer}>
        <Input
          style={[styles.input, { marginTop: 80 }]}
          placeholder="Email, Phone or Username"
        />
        <Input secureTextEntry style={styles.input} placeholder="Password" />
        <Button color={styles.baseColor} style={styles.input}>
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
