import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Text, Input, Button } from "galio-framework";
import styles from "../constant/Style";
import useSendOTP from "../hooks/useSendOtp";
import useVerifyOTP from "../hooks/useVerifyOTP";

const SignUp = ({ navigation }) => {
  const [type, setType] = useState("Not Sent");
  const [otp, setOTP] = useState("");
  const [email, setEmail] = useState("");
  const [SendOTP, OTPResult, OTPerror] = useSendOTP();
  const [VerifyOTP, VerifyResult, Verifyerror] = useVerifyOTP();
  console.log(VerifyResult);
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
            onChangeText={(e) => setOTP(e)}
            style={[styles.input, { marginTop: 80 }]}
            placeholder="Enter 6 Digit OTP"
          />
        ) : (
          <Input
            value={email}
            onChangeText={(e) => setEmail(e)}
            style={[styles.input, { marginTop: 80 }]}
            placeholder="Phone or Email"
          />
        )}
        {type === "Sent OTP" ? (
          <Button
            onPress={() => {
              VerifyOTP(otp);
              navigation.replace("ChangePass");
            }}
            color={styles.baseColor}
            style={styles.input}
          >
            Verify
          </Button>
        ) : (
          <Button
            onPress={() => {
              SendOTP(email);
              setType("Sent OTP");
            }}
            color={styles.baseColor}
            style={styles.input}
          >
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

export default SignUp;
