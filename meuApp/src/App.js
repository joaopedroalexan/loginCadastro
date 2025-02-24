import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Cadastro from "./screens/Cadastro";

export default function App() {
  return (
    <View style={styles.container}>
      <Cadastro></Cadastro>
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
  box1: {
    width: 200,
    height: 200,
    backgroundColor: "#ff0000",
  },
  box2: {
    width: 200,
    height: 200,
    backgroundColor: "#00ff00",
  },
  box3: {
    width: 200,
    height: 200,
    backgroundColor: "#0000ff",
  },
  box4: {
    width: 200,
    height: 200,
    backgroundColor: "#000000",
    color:'ffffff'
  },
  row:{
    flexDirection:'row'
  },
  texto:{
    fontWeight:'bold',
    fontSize:30
  },
  inputi:{
    borderWidth:1,
    borderColor:'lavander',
    width:'80%',
    padding:10,
    marginVertical:10
  }
});
