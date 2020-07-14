import React, { useState } from "react";
import { View } from "react-native";
import { Text, Input, Button } from "galio-framework";
import styles from "../constant/Style";
import useChangePass from "../hooks/useChangePass";

const ChangePass = ({ navigation }) => {
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [ChangePass, result, error] = useChangePass();
  console.log(result);
  return (
    <View style={[styles.container, { backgroundColor: styles.baseColor }]}>
      <View style={styles.header}>
        <Text h4 color="white">
          Change Password
        </Text>
      </View>
      <View style={styles.footer}>
        <Input
          value={pwd1}
          onChangeText={(e) => setPwd1(e)}
          style={[styles.input, { marginTop: 80 }]}
          placeholder="Create new password"
          secureTextEntry
        />
        <Input
          value={pwd2}
          onChangeText={(e) => setPwd2(e)}
          style={[styles.input]}
          placeholder="Confirm Password"
          secureTextEntry
        />
        <Button
          onPress={() => {
            ChangePass(pwd1, pwd2);
            navigation.replace("Home");
          }}
          color={styles.baseColor}
          style={styles.input}
        >
          Change Password
        </Button>
      </View>
    </View>
  );
};

export default ChangePass;
