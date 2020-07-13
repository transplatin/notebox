import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Text, Icon, Input, Button } from "galio-framework";
import styles from "../constant/Style";

const ChangePass = ({ navigation }) => {
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
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
          onChangeText={(e)=>setPwd1(e)}
          style={[styles.input, { marginTop: 80 }]}
          placeholder="Create new password"
          secureTextEntry
        />
        <Input
          value={pwd2}
          onChangeText={(e)=>setPwd2(e)}
          style={[styles.input]}
          placeholder="Confirm Password"
          secureTextEntry
        />
        <Button onPress={()=>onClickChange(pwd1,pwd2)} color={styles.baseColor} style={styles.input}>
          Change Password
        </Button>
      </View>
    </View>
  );
};

onClickChange=(pwd1,pwd2)=>{
  /* Do Something */
}

export default ChangePass;
