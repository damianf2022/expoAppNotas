import { Text, View, TouchableOpacity } from "react-native";
import { homeStyles } from "../styles/homeStyle";

export default function Home({ navigation }) {
  return (
    <View style={homeStyles.main}>
      <Text style={homeStyles.title}>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateNote')}
        style={homeStyles.buttonAdd}
      >
        <Text style={homeStyles.textButtonAdd}>Agregar Nota</Text>
      </TouchableOpacity>
    </View>
  );
}
