import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { useState } from "react";
import { createNoteStyle } from "../styles/createStyle";

export default function CreateNote() {
  const [titulo, setTitulo] = useState("");
  const [descorta, setDescorta] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const saveNote = () => {
    Alert.alert('Importante','esta es una prueba')
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
            onChange={setTitulo}
            style={createNoteStyle.input}
          />
          <TextInput
            placeholder="Descripcion Corta"
            placeholderTextColor="slategray"
            value={descorta}
            onChange={setDescorta}
            style={createNoteStyle.input}
          />
          <TextInput
            placeholder="Fecha"
            placeholderTextColor="slategray"
            value={fecha}
            onChange={setFecha}
            style={createNoteStyle.input}
          />
          <TextInput
            placeholder="Descripcion"
            placeholderTextColor="slategray"
            value={descripcion}
            onChange={setDescripcion}
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
