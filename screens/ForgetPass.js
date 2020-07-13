import React, { useState } from "react";
import { View,  TouchableWithoutFeedback } from "react-native";
import { Text, Input, Button } from "galio-framework";
import styles from "../constant/Style";

const SignUp = ({ navigation }) => {
  const [type, setType] = useState("Not Sent");
  const [otp, setOTP] = useState("");
  const [email, setEmail] = useState("");
  //set type to Sent OTP once otp is sent
  return (
    <View style={[styles.container, { backgroundColor: styles.baseColor }]}>
      <View style={styles.header}>
        <Text h4 color="white">
          Receive OTP
        </Text>
      </View>
      <View style={styles.footer}>
        {type === "Sent OTP" ? (
          <Input
            value={otp}
            onChangeText={(e)=>setOTP(e)}
            style={[styles.input, { marginTop: 80 }]}
            placeholder="Enter 6 Digit OTP"
          />
        ) : (
          <Input
            value={email}
            onChangeText={(e)=>setEmail(e)}
            style={[styles.input, { marginTop: 80 }]}
            placeholder="Phone or Email"
          />
        )}
        {type === "Sent OTP" ? (
          <Button onPress={()=>onVerifyClick(otp)} color={styles.baseColor} style={styles.input}>
            Verify
          </Button>
        ) : (
          <Button onPress={()=>onSendOTPClick(email)} color={styles.baseColor} style={styles.input}>
            Send OTP
          </Button>
        )}

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

const onVerifyClick=(otp)=>{
  /* Do something */
}
const onSendOTPClick=(email)=>{
  /* Do something */
}
export default SignUp;
