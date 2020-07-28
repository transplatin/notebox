import React from "react";
import { View, StyleSheet, TouchableHighlight, Share } from "react-native";
import { Icon } from "galio-framework";
import useSaveBook from "../hooks/useSaveBook";

const SaveMark = (props) => {
  const [SaveBook, result, error] = useSaveBook();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out ${props.name} and other study material from NoteBox. Use BETA100 if it ask for beta code. Thanks me later 😉.
        
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
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={() => onShare()} style={styles.button}>
        <Icon name="share" family="fontawesome" color="white" size={30} />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() =>
          SaveBook(
            props.bid,
            props.type,
            props.name,
            props.descr,
            props.link,
            props.url
          )
        }
        style={styles.button}
      >
        <Icon name="star" family="materialicons" color="white" size={35} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    height: 40,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SaveMark;
