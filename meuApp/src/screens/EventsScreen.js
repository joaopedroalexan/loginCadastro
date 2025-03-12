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
import api from "../axios/axios";

export default function evento() {
  const [evento, setEvent] = useState({
    nome: "",
    descricao: "",
    data_hora: "",
    local: "",
    fk_id_organizador: "",
  });
  async function handleevento() {
    await api.postEvents(evento).then(
      (response) => {
        Alert.alert("OK", response.data.message);
        console.log(response.data.message);
      },
      (error) => {
        Alert.alert("Error", error.response.data.error);
        console.log(error.message);
      }
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> cadastre seu evento:</Text>
      <TextInput
        placeholder="Digite o nome do evento aqui:"
        value={evento.nome}
        onChangeText={(value) => {
          setEvent({ ...evento, nome: value });
        }}
      />
      <TextInput
        placeholder="Digite o local aqui:"
        value={evento.local}
        onChangeText={(value) => {
          setEvent({ ...evento, local: value });
        }}
      />
      <TextInput
        placeholder="Digite a descriçao aqui:"
        value={evento.descricao}
        onChangeText={(value) => {
          setEvent({ ...evento, descricao: value });
        }}
      />
      <TextInput
        placeholder="Horario"
        value={evento.data_hora}
        onChangeText={(value) => {
          setEvent({ ...evento, data_hora: value });
        }}
      />
      <TextInput
        placeholder="coloque o id do organizador"
        value={evento.fk_id_organizador}
        onChangeText={(value) => {
          setEvent({ ...evento, fk_id_organizador: value });
        }}
      />
      <TouchableOpacity onPress={handleevento}>
        <Text>Clique Aqui Para cadastrar o evento</Text>
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
