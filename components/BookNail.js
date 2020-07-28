import React,{useState} from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Share,
} from "react-native";
import { Text, Button, Icon } from "galio-framework";
import useSaveBook from "../hooks/useSaveBook";
import { useNavigation } from "@react-navigation/native";
const BookNail = (props) => {
  const [SaveBook, result, error] = useSaveBook();
  const navigation = useNavigation();
  const [saved,setSaved]=useState(props.saved);
  const onSave=()=>{
    saved=="saved"?setSaved("unsaved"):setSaved("saved");
  }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out ${props.title} and other study material from NoteBox. Use BETA100 if it ask for beta code. Thanks me later 😉.

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
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View>
          <Image
            source={{
              uri: props.link,
            }}
            style={styles.image}
          />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button
            onPress={() =>
              navigation.push("Read", {
                name: props.name,
                bid: props.bid,
                type: props.type,
                descr: props.descr,
                link: props.link,
                url: props.url,
              })
            }
            style={styles.readButton}
            primary
          >
            Read
          </Button>
        </View>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.image}>
          <Text h6 center color="#0f0f0f">
            {props.name}
          </Text>
          <Text p style={{ marginLeft: 5 }} small muted>
            {props.descr}
          </Text>
          <Text small style={{ marginBottom: 5, alignSelf: "flex-end" }} muted>
            by {props.uploader}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={() => onShare()} style={styles.button}>
            <Icon name="share" family="fontawesome" color="#e1aa57" size={40} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() =>{
              SaveBook(
                props.bid,
                props.type,
                props.name,
                props.descr,
                props.link,
                props.url
              )
              onSave();
            }

            }
            style={styles.button}
          >
            {saved == "saved" ? (
              <Icon
                name="star"
                family="materialicons"
                color="#ffa41b"
                size={40}
              />
            ) : (
              <Icon
                name="star-border"
                family="materialicons"
                color="#e1aa57"
                size={40}
              />
            )}
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 220,
    flexDirection: "row",
    margin: 10,
    elevation: 10,
  },
  leftSection: {
    flex: 2,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  rightSection: {
    flex: 3,
    backgroundColor: "#f5f5f5",
  },
  image: {
    height: 180,
    width: "100%",
    padding: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  readButton: {
    height: 40,
    width: "100%",
    marginVertical: 2,
    backgroundColor: "#ffa41b",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    height: 40,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BookNail;
