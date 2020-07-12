import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Text, Icon, Input, Button } from "galio-framework";
import styles from "../constant/Style";

const SignUp = ({ navigation }) => {
  const [type, setType] = useState("Not Sent");

  return (
    <View style={[styles.container, { backgroundColor: styles.baseColor }]}>
      <View style={styles.header}>
        <Text h4 color="white">
          Change Password
        </Text>
      </View>
      <View style={styles.footer}>
        <Input
          style={[styles.input, { marginTop: 80 }]}
          placeholder="Create password"
        />
        <Input
          style={[styles.input]}
          placeholder="Confirm Password"
        />
        <Button color={styles.baseColor} style={styles.input}>
          Change Password
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

export default SignUp;
