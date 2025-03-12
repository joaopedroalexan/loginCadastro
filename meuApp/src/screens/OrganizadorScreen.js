import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button
} from "react-native";
import api from "../axios/axios";

export default function org() {
    const [organizador, setOrganizador] = useState({
        nome: "",
        email: "",
        senha: "",
        telefone: "", 
    })
    async function handleorganizador() {
        await api.postOrganizador(organizador).then(
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
             <Text style={styles.titulo}> cadastre o organizador:</Text>
             <TextInput
               style={styles.inputi}
               placeholder="Digite seu E-mail aqui:"
               value={organizador.email}
               onChangeText={(value) => {
                 setOrganizador({ ...organizador, email: value });
               }}
             />
             <TextInput
               style={styles.inputi}
               placeholder="Digite sua senha aqui:"
               secureTextEntry={true}
               value={organizador.senha}
               onChangeText={(value) => {
                 setOrganizador({ ...organizador, senha: value });
               }}
             />
             <TextInput
               style={styles.inputi}
               placeholder="Digite o nome do organizador aqui:"
               value={organizador.nome}
               onChangeText={(value) => {
                 setOrganizador({ ...organizador, nome: value });
               }}
             />
             <TextInput
               style={styles.inputi}
               placeholder="Digite seu numero de telefone"
               value={organizador.telefone}
               onChangeText={(value) => {
                 setOrganizador({ ...organizador, telefone : value });
               }}
             />
             <TouchableOpacity onPress={handleorganizador}>
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
          
  