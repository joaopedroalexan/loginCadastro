import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {

  const [dado, setDado]=useState(0);

  function rodarDado(){
    setDado(Math.floor(Math.random()*7))
  }

  return (
    <View style={styles.container}>
      <Text>O NÚMERO É: {dado}</Text>
      <Button
      title="Jogue o Dado!"
      onPress={()=>rodarDado()}
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
  },
});
