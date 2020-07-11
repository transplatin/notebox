import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { Text, Icon, Input, Button } from "galio-framework";
import styles from "../constant/Style";

const SignUp = ({navigation}) => {
  return (
    <View style={[styles.container, { backgroundColor: styles.baseColor }]}>
      <View style={styles.header}>
        <Text h1 color="white">
          Register
        </Text>
      </View>
      <View style={styles.footer}>
        <Input
          style={[styles.input, { marginTop: 80 }]}
          placeholder="Username"
        />
        <Input style={styles.input} placeholder="Email" />
        <Input style={styles.input} placeholder="Phone" />
        <Input secureTextEntry style={styles.input} placeholder="Password" />
        <Button color={styles.baseColor} style={styles.input}>
          Register
        </Button>
        <View
          style={{
            flexDirection: "row",
            padding: 10
          }}
        >
          <Text p muted>Already have an account ? </Text>
          <TouchableHighlight onPress={() => navigation.pop()}>
            <Text color={styles.baseColor} p>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
