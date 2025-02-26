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

export default function cadastro() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    cpf: "",
    name: "",
    data_nascimento: "",
  });
  async function handleCadastro() {
    await api.postCadastro(user).then(
      (response) => {
        Alert.alert("OK", response.data.message);
        console.log(response.data.message);
      },
      (error) => {
        Alert.alert("Error", error.response.data.error)
        console.log(error.message);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Faça sign-up-up:</Text>
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

      <TextInput
        style={styles.inputi}
        placeholder="Digite seu name aqui:"
        value={user.name}
        onChangeText={(value) => {
          setUser({ ...user, name: value });
        }}
      />

      <TextInput
        style={styles.inputi}
        placeholder="Digite seu cpf aqui:"
        value={user.cpf}
        onChangeText={(value) => {
          setUser({ ...user, cpf: value });
        }}
      />

      <TextInput
        style={styles.inputi}
        placeholder="coloque sua data de nascimento"
        value={user.data_nascimento}
        onChangeText={(value) => {
          setUser({ ...user, data_nascimento: value });
        }}
      />
      <TouchableOpacity onPress={handleCadastro}>
        <Text>Clique Aqui Para cadastro</Text>
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
