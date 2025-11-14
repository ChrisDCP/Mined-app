import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/FireBaseConfig";

export default function WelcomeScreen({ navigation }) {
  useEffect(() => {
    // onAuthStateChanged es un listener que se ejecuta cuando el usuario
    // inicia o cierra sesión, y también al cargar la app.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si hay un usuario, significa que ya inició sesión antes.
        // Lo redirigimos a la pantalla principal.
        navigation.replace("MainTabs");
      }
      // Si no hay 'user', no hacemos nada y dejamos que se muestre la pantalla de bienvenida.
    });

    // Limpiamos el listener cuando el componente se desmonta.
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{
          uri: "https://img.icons8.com/ios-filled/100/6C63FF/open-book.png",
        }}
        style={styles.logo}
      />

      {/* Título */}
      <Text style={styles.title}>Biblioteca Digital MINED</Text>
      <Text style={styles.subtitle}>
        Accede a tus libros en cualquier momento y lugar 📚
      </Text>

      {/* Botones */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonTextPrimary}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonTextSecondary}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: { width: 120, height: 120, marginBottom: 30, tintColor: "#6C63FF" },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 40,
  },
  buttonContainer: { width: "100%" },
  buttonPrimary: {
    backgroundColor: "#6C63FF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },
  buttonSecondary: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#6C63FF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonTextPrimary: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
