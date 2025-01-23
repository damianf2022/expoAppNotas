import { StyleSheet } from "react-native";

export const detailsNotesStyle = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F9",
  },

  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 26,
    fontStyle: "italic",
    color: "#333",
    marginBottom: 20,
  },

  titulo: {
    fontWeight: "600",
    fontSize: 22,
    marginTop: 15,
    color: "#444", 
  },

  card: {
    width: "90%",
    backgroundColor: "#FFFFFF", 
    borderRadius: 16, 
    padding: 25,
    marginTop: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10, 
    borderWidth: 1, 
    borderColor: "#DDD", 
  },

  fecha: {
    fontWeight: "400",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 15,
    fontStyle: "italic",
    color: "#888", 
  },

  descripcion: {
    fontSize: 17,
    letterSpacing: 0.5,
    lineHeight: 24, 
    color: "#555", 
  },
});
