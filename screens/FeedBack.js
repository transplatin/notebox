import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Text, Input, Button } from "galio-framework";
import styles from "../constant/Style";
import useSendFeedBack from "../hooks/useSendFeedback";

const FeedBack = ({ navigation }) => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [SendFeedback, result, error] = useSendFeedBack();
  console.log(result)

  return (
    <View style={[styles.container, { backgroundColor: styles.baseColor }]}>
      <View style={styles.header}>
        <Text h1 color="white">
          Feedback
        </Text>
      </View>
      <View style={styles.footer}>
        <Input
          value={name}
          onChangeText={(e) => setName(e)}
          style={[styles.input, { marginTop: 80 }]}
          placeholder="Your Name"
        />
        <Input
          value={feedback}
          multiline={true}
          numberOfLines={10}
          onChangeText={(e) => setFeedback(e)}
          style={[styles.input,{height: 200}]}
          placeholder="Your Valuable Feedback"
        />
{
    result.length!=0?   (       <Text p color="green">
            Feedback Sent
          </Text>
        ) : null
}
        {error ? (
          <Text p color="red">
            {error}
          </Text>
        ) : null}

        <Button
          onPress={() => {
            if (verifyDetails(name, feedback)) {
              SendFeedback(name, feedback);
            }
          }}
          color={styles.baseColor}
          style={styles.input}
        >
          Send Feedback
        </Button>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
          }}
        ></View>
      </View>
    </View>
  );
};

const verifyDetails = (username, password) => {
  if (username == "") {
    alert("Name cannot be empty !");
    return false;
  } else if (password == "") {
    alert("Feedback cannot be empty !");
    return false;
  }
  return true;
};
export default FeedBack;
