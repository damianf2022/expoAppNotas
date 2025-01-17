import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CreateNote from "./screen/CreateNote";
import DetailsNotes from "./screen/DetailsNotes";
import Home from "./screen/Home";

export default function App() {
  // Creación del stack de navegación
  const Stack = createStackNavigator();
  // Función que define las rutas y pantallas de la app
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name= 'CreateNote'component={CreateNote} />
        <Stack.Screen name='DetailsNotes' component={DetailsNotes} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
