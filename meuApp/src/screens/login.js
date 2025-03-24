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
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation()
  const [user, setUser] = useState({
    email: "",
    password: "",
    Showpassword:false
  });

  async function handleLogin() {
    try {
      const response = await api.postLogin(user);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Erro", error.response.data.error)
      console.log(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Faça login-in:</Text>
      <TextInput
        style={styles.emailInput}
        placeholder="Digite seu E-mail aqui:"
        value={user.email}
        onChangeText={(value) => {
          setUser({ ...user, email: value });
        }}
      />
      <View style={styles.Showpass}>
      <TextInput
        style={styles.passwordInput}
        placeholder="Digite sua senha aqui:"
        secureTextEntry={!user.Showpassword}
        value={user.password}
        onChangeText={(value) => {
          setUser({ ...user, password: value });
        }}
      />
      <TouchableOpacity onPress={()=> setUser({...user,Showpassword: !user.Showpassword })}><Ionicons name={user.Showpassword?"eye-off":"eye"} size={24} color="gray" /></TouchableOpacity>
      </View>
      <Button title="Login" onPress={handleLogin}/>
      <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}>
        <Text>Cadastre-se</Text>
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
  Showpass: {
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    borderBottomWidth:1,
    paddingRight:10,
  },
  emailInput: {
    borderBottomWidth:1,
    width:"100%",
  },
  passwordInput: {
    flex:1,
    height:40,
  }
});
