import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  main: { flex: 1 },
  title: {
    marginTop: 60,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "600",
  },
  buttonAdd: {
    backgroundColor: "#FB4E4E", 
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 10,
    marginTop: 30,
  },
  textButtonAdd: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  noteCard: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: "bold", 
    color: "#333",
    marginBottom: 5,
  },
  noteDate: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  noteShortDes: {
    fontSize: 16,
    color: "#666",
  },
  buttonClear: {
    backgroundColor: "#D50000", 
    marginHorizontal:50,
    borderRadius: 20,
    paddingVertical: 12,
    marginBottom:30,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  textButtonClear: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
