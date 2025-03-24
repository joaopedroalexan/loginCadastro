import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login";
import Cadastro from "./screens/Cadastro";
import HomeScreen from "./screens/HomeScreen";
import EventoScreen from "./screens/EventsScreen";
import OrganizadorScreen from "./screens/OrganizadorScreen";
import Layout from "./component/Layout";
import IngressoScreen from "./screens/IngressoScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Login"
          component={() => (
            <Layout>
              <Login />
            </Layout>
          )}
        />
        <Stack.Screen name="Cadastro" component={() => (
            <Layout>
              <Cadastro />
            </Layout>
          )} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CadastroEvento" component={EventoScreen} />
        <Stack.Screen
          name="CadastroOrganizador"
          component={OrganizadorScreen}
        />
        <Stack.Screen name="CadastroIngresso" component={IngressoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

