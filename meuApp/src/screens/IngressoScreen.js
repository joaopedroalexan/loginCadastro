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

export default function ingresso() {
    const [ingresso, setIng] = useState({
        preco:"", 
        tipo:"", 
        fk_id_evento:""
    })
    async function handleingresso() {
        await api.postIngresso(ingresso).then(
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
             <Text style={styles.titulo}> cadastre seu ingresso:</Text>
             <TextInput
               style={styles.inputi}
               placeholder="Digite o preço do ingresso aqui:"
               value={ingresso.preco}
               onChangeText={(value) => {
                 setIng({ ...ingresso, preco: value });
               }}
             />
             <TextInput
               style={styles.inputi}
               placeholder="Digite se o tipo do ingresso sera vip ou outra coisa aqui:"
               value={ingresso.tipo}
               onChangeText={(value) => {
                 setIng({ ...ingresso, tipo: value });
               }}
             />
             <TextInput
               style={styles.inputi}
               placeholder="Digite o id do evento aqui:"
               value={ingresso.fk_id_evento}
               onChangeText={(value) => {
                 setIng({ ...ingresso, fk_id_evento: value });
               }}
             />
             <TouchableOpacity onPress={handleingresso}>
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