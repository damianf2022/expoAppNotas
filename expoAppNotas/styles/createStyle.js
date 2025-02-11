import { StyleSheet } from "react-native";
export const createNoteStyle = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
    marginTop: 9,
    fontStyle: "italic",
  },
  card: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    marginTop: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 15,
    marginVertical: 10,
    color: "#000",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FB4E4E",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  text: {
    color: "gray",
    fontSize: 16,
    fontWeight: "300",
    marginTop: 15,
  },
  createNoteStyle:{
    input:{
      width: "100%",
      height: 50,
      borderRadius: 25,
      backgroundColor: "#D9D9D9",
      paddingHorizontal: 15,
      marginVertical: 10,
      color: "#000",
    }
  }
});
