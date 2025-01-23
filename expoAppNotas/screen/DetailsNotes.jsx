import {
  Text,
  View,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { detailsNotesStyle } from "../styles/detailsNotesStyle";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetailsNotes() {
  const route = useRoute();
  const navigation = useNavigation();
  const { note } = route.params;

  const deleteNote = async () => {
    Alert.alert(
      "Importante",
      "estas seguro de que quieres eliminar esta nota?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              const storedNotes = await AsyncStorage.getItem("notas");
              const notes = storedNotes ? JSON.parse(storedNotes) : [];
              const updatedNotes = notes.filter((n) => n.id !== note.id);
              await AsyncStorage.setItem("notas", JSON.stringify(updatedNotes));
              Alert.alert(
                "Nota eliminada",
                "La nota ha sido eliminada con exito"
              );
              navigation.navigate("Home");
            } catch (error) {
              console.error("Error al eliminar la nota",error);
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={detailsNotesStyle.scrollContainer}>
      <View style={detailsNotesStyle.card}>
        <Text style={detailsNotesStyle.title}>NOTA</Text>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={detailsNotesStyle.titulo}>{note.titulo}</Text>
          <TouchableOpacity style={{ marginTop: 12 }} onPress={deleteNote}>
            <Icon name="trash" type="ionicon" color="#FB4E4E" />
          </TouchableOpacity>
        </View>
        <Text style={detailsNotesStyle.fecha}>{note.fecha}</Text>
        <Text style={detailsNotesStyle.descripcion}>{note.descripcion}</Text>
      </View>
    </ScrollView>
  );
}
