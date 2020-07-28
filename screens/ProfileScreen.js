import React from "react";
import { View, StyleSheet, Dimensions, Image, Share } from "react-native";
import { Text } from "galio-framework";
import IconButton from "../components/IconButton";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

const _Height = Math.floor(Dimensions.get("window").height);

const ProfileScreen = (props) => {
  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this app for notes and study material NoteBox. Use BETA100 if it ask for beta code. Thanks me later 😉.
        
https://play.google.com/store/apps/details?id=com.notebox.app`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const clear = async () => {
    try {
      await SecureStore.deleteItemAsync("user");
      navigation.replace("Auth");
    } catch (e) {
      console.log(e);
    }
  };
  const changePass = () => {
    const read = async () => {
      try {
        const credentials = await SecureStore.getItemAsync("user");
        const user = JSON.parse(credentials);
        navigation.navigate("Auth", {
          screen: "ChangePass",
          params: {
            uid: user.uid,
            authtoken: user.authtoken,
            phone: user.phone,
          },
        });
      } catch (e) {
        console.log(e);
      }
    };
    read();
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text h6 bold center color="white" style={{ marginTop: 80 }}>
            PROFILE
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonList}>
            <IconButton
              iconname="key"
              function={changePass}
              text="Change Password"
            />
            <IconButton
              function={()=>{
                navigation.navigate("Request")
              }}
              iconname="book-multiple"
              text="Request Study Material"
            />
            <IconButton
              function={onShare}
              iconname="share-outline"
              text="Recommend to Friends"
            />
            <IconButton
              function={()=>{
                navigation.navigate("Feedback")
              }}
              iconname="forum"
              text="Feedback"
            />
            <IconButton function={clear} iconname="logout" text="Logout" />
          </View>
        </View>
      </View>
      <View style={styles.profileBox}>
        <Image
          source={{
            uri:
              "data:image/png;base64,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",
          }}
          style={styles.image}
        />
        <Text p muted style={{ marginTop: 10 }}>
          BETA-VERSION
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    flex: 1,
    backgroundColor: "#ffa41b",
    justifyContent: "flex-start",
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: "white",
  },
  profileBox: {
    position: "absolute",
    backgroundColor: "white",
    height: 200,
    width: 200,
    elevation: 8,
    borderRadius: 100,
    top: _Height / 5.5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: "contain",
  },
  buttonList: {
    flex: 1,
    marginLeft: 20,
    marginTop: 120,
    justifyContent: "space-evenly",
  },
});
export default ProfileScreen;
