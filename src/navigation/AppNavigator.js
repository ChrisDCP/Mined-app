import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import ReaderScreen from "../screens/ReaderScreen";
import HomeScreen from "../screens/HomeScreen";
import BooksScreen from "../screens/BooksScreen";
import ReportesScreen from "../screens/ReportesScreen";
import PerfilScreen from "../screens/PerfilScreen";
import SoporteScreen from "../screens/SoporteScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreeen from "../screens/LoginScreeen";
import RegisterScreen from "../screens/RegisterScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Inicio") iconName = "home";
          else if (route.name === "Biblioteca") iconName = "book";
          else if (route.name === "Reportes") iconName = "bar-chart";
          else if (route.name === "Perfil") iconName = "person";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6C63FF",
        tabBarInactiveTintColor: "#A0AEC0",
        headerShown: false,
      })}
    >
      {/*<Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Biblioteca" component={BooksScreen} />
      {/*<Tab.Screen name="Reportes" component={ReportesScreen} />*/}
      {/*<Tab.Screen name="Perfil" component={PerfilScreen} />*/}
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      {/*<Stack.Screen name="Login" component={LoginScreeen} />
      {/*<Stack.Screen name="Reader" component={ReaderScreen} />*/}
      {/*<Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      {/*<Stack.Screen name="Soporte" component={SoporteScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />*/}
    </Stack.Navigator>
  );
}

