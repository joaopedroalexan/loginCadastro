import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Bem-vindo</Text>
      <Button
        title="Organizador"
        onPress={()=>navigation.navigate("CadastroOrganizador")}
      />
      <Button title="Evento" onPress={()=>navigation.navigate("CadastroEvento")} />
      <Button
        title="Ingresso"
        onPress={()=>navigation.navigate("CadastroIngresso")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 30,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
