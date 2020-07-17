/*
#80520e
#ffa41b
#eccb98
#e1aa57
*/
import {Dimensions} from "react-native"
const _Height = Math.floor(Dimensions.get("window").height);
const _Width = Math.floor(Dimensions.get("window").width);
let baseColorTheme = "#ffa41b";
export default {
  //Theme
  baseColor: baseColorTheme,
  // Login Screen
  container: {
    flex: 1,
  },
  troubleSignInText: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: baseColorTheme,
  },
  footer: {
    flex: 3,
    justifyContent: "flex-start",
    backgroundColor: "white",
    alignItems: "center",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopColor: "white",
    elevation: 10,
  },
  input: {
    width: "80%",
  },
  //Section
  headingText: {
    fontSize: 100,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  //book
  bookContainer: {
    width: 125,
    height: 160,
    backgroundColor: "#f5f5f5",
  },
  bookImage:{
    flex: 1,
    height: _Height / 3.6,
    width: _Width/2.5,
    resizeMode: "contain",
    backgroundColor: "#f5f5f5",
  },
  
};
