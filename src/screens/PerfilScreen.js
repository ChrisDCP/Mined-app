import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://img.icons8.com/ios-filled/100/6C63FF/user.png" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Christopher Castro</Text>
      <Text style={styles.email}>christopher@mined.edu.ni</Text>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("Settings")}>
        <Text style={styles.optionText}>⚙️ Configuración de lectura</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("Soporte")}>
        <Text style={styles.optionText}>💬 Soporte Técnico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#F9FAFB", padding: 30 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: "bold", color: "#111827" },
  email: { color: "#6B7280", marginBottom: 30 },
  option: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  optionText: { fontSize: 16, color: "#111827" },
  logout: { marginTop: 30 },
  logoutText: { color: "#6C63FF", fontWeight: "bold" },
});
