import { Text, View, TouchableOpacity } from "react-native";
import { homeStyles } from "../styles/homeStyle";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
import { Alert } from "react-native";

export default function Home({ navigation }) {
  const [notes, setNotes] = useState([]);

  // Recuperar las notas almacenadas en AsyncStorage
  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem("notas");
      const parsedNotes = storedNotes ? JSON.parse(storedNotes) : [];
      setNotes(parsedNotes);
    } catch (error) {
      console.error("Error al cargar las notas:", error);
      Alert.alert("Error", "No se pudieron cargar las notas.");
    }
  };

  // Cargar las notas al enfocarse en la pantalla
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadNotes);
    return unsubscribe; // Limpia el evento al desmontar el componente
  }, [navigation]);

  // Renderizar cada nota
  const renderNote = ({ item }) => (
    <View style={homeStyles.noteCard}>
      <Text style={homeStyles.noteTitle}>{item.titulo}</Text>
      <Text style={homeStyles.noteDate}>{item.fecha}</Text>
      <Text style={homeStyles.noteShortDes}>{item.descripcionCorta}</Text>
    </View>
  );

  // Limpiar todas las notas de AsyncStorage
  const clearNotes = async () => {
    try {
      await AsyncStorage.removeItem("notas");
      setNotes([]); // Actualizar el estado para reflejar los cambios
      console.log("Datos bajo la clave 'notas' eliminados.");
      Alert.alert("Notas eliminadas", "Todas las notas han sido borradas.");
    } catch (error) {
      console.error("Error al limpiar las notas:", error);
      Alert.alert("Error", "No se pudieron borrar las notas.");
    }
  };

  return (
    <View style={homeStyles.main}>
      <Text style={homeStyles.title}>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateNote")}
        style={homeStyles.buttonAdd}
      >
        <Text style={homeStyles.textButtonAdd}>Agregar Nota</Text>
      </TouchableOpacity>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderNote}
        contentContainerStyle={homeStyles.listContainer}
      />
      <TouchableOpacity
        onPress={clearNotes}
        style={homeStyles.buttonClear}
      >
        <Text style={homeStyles.textButtonClear}>Borrar Todas las Notas</Text>
      </TouchableOpacity>
    </View>
  );
}
