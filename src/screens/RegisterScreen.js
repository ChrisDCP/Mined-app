import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { colors, fonts, spacing } from "../styles/theme";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Registro con:", name, email, password);
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      <Text style={styles.subtitle}>Regístrate para comenzar</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        ¿Ya tienes cuenta?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          Inicia sesión aquí
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.large,
    justifyContent: "center",
  },
  title: {
    fontSize: fonts.title,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: spacing.small,
    textAlign: "center",
  },
  subtitle: {
    fontSize: fonts.body,
    color: colors.muted,
    marginBottom: spacing.large,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: spacing.medium,
    marginBottom: spacing.medium,
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: spacing.medium,
  },
  buttonText: { color: colors.white, fontSize: fonts.body, fontWeight: "bold" },
  footerText: { textAlign: "center", color: colors.text, marginTop: spacing.medium },
  link: { color: colors.primary, fontWeight: "bold" },
});
