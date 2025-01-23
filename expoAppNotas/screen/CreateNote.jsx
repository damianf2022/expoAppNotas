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

import DateTimerpicker from "@react-native-community/datetimepicker";

export default function CreateNote({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [descripcionCorta, setDescripcionCorta] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePickerHandler = () => {
    setShowDatePicker(true);
  };
  const onDateChange = (event, date) => {
    setShowDatePicker(false);
    //setShowDatePicker(Platform.OS ==='ios')//para ios mantenga abierto
    if (event.type !== "dismissed" && date) {
      setSelectedDate(date);
      setFecha(date.toLocaleDateString("es-ES"));
    }
  };

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

          <TouchableOpacity
            style={createNoteStyle.input}
            onPress={showDatePickerHandler}
          >
            <TextInput
              style={{ marginTop: 10 }}
              placeholder="Fecha"
              placeholderTextColor="slategray"
              value={fecha}
              onChangeText={setFecha}
              editable={false}
            />
          </TouchableOpacity>

          {/*selector de fecha*/}
          {showDatePicker && (
            <DateTimerpicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={onDateChange}
              minimumDate={new Date()}
            />
          )}

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
