import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import api from "../axios/axios";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleLogin() {
    await api.postLogin(user).then(
        (response) => {
            Alert.alert('OK',response.data.message);
          console.log(response.data.message);
        },
        (error) => {
          console.log(error.message);
        }
      );
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Faça login-in:</Text>
      <TextInput
        style={styles.inputi}
        placeholder="Digite seu E-mail aqui:"
        value={user.email}
        onChangeText={(value) => {
          setUser({ ...user, email: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Digite sua senha aqui:"
        secureTextEntry={true}
        value={user.password}
        onChangeText={(value) => {
          setUser({ ...user, password: value });
        }}
      />
      <TouchableOpacity
       onPress={handleLogin}>
        <Text>Clique Aqui Para Login-in</Text>
      </TouchableOpacity>
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
