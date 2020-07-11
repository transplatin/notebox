let baseColorTheme="teal";
export default {
  //Theme
  baseColor: baseColorTheme,
    // Login Screen
  container: {
    flex: 1,
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
  },
  header: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: baseColorTheme
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
  input:{
      width: "80%",
  }

};
