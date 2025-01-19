import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { createNoteStyle } from "../styles/createStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateNote({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [descripcionCorta, setDescripcionCorta] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const saveNote = async () => {
    if (!titulo || !descripcionCorta || !fecha || !descripcion) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    try {
      const newNote = {
        id: Date.now().toString(),
        titulo,
        descripcionCorta,
        fecha,
        descripcion,
      };

      const storeNotes = await AsyncStorage.getItem("notas");
      const notes = storeNotes ? JSON.parse(storeNotes) : [];
      notes.push(newNote);

      await AsyncStorage.setItem("notas", JSON.stringify(notes));

      // Limpiar los campos después de guardar
      setTitulo("");
      setDescripcionCorta("");
      setFecha("");
      setDescripcion("");

      Alert.alert("Nota guardada", "Tu nota se ha guardado exitosamente.");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error al guardar la nota:", error);
      Alert.alert("Error", "No se pudo guardar la nota.");
    }
  };

  return (
    <ScrollView contentContainerStyle={createNoteStyle.scrollContainer}>
      <View style={createNoteStyle.main}>
        <Text style={createNoteStyle.title}>CREAR NOTA</Text>
        <View style={createNoteStyle.card}>
          <TextInput
            placeholder="Titulo"
            placeholderTextColor="slategray"
            value={titulo}
            onChangeText={setTitulo} // Cambiado a onChangeText
            style={createNoteStyle.input}
          />
          <TextInput
            placeholder="Descripción Corta"
            placeholderTextColor="slategray"
            value={descripcionCorta}
            onChangeText={setDescripcionCorta} // Cambiado a onChangeText
            style={createNoteStyle.input}
          />
          <TextInput
            placeholder="Fecha"
            placeholderTextColor="slategray"
            value={fecha}
            onChangeText={setFecha} // Cambiado a onChangeText
            style={createNoteStyle.input}
          />
          <TextInput
            placeholder="Descripción"
            placeholderTextColor="slategray"
            value={descripcion}
            onChangeText={setDescripcion} // Cambiado a onChangeText
            style={createNoteStyle.input}
          />
          <TouchableOpacity style={createNoteStyle.button} onPress={saveNote}>
            <Text style={createNoteStyle.buttonText}>Registrar Nota</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
