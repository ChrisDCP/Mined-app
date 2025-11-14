import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, Slider } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Configuración de Lectura</Text>

      <View style={styles.option}>
        <Text style={styles.optionText}>Modo oscuro</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor={darkMode ? "#6C63FF" : "#ccc"}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Tamaño de texto: {fontSize}</Text>
        <Slider
          minimumValue={12}
          maximumValue={24}
          step={1}
          value={fontSize}
          onValueChange={setFontSize}
          style={{ width: "80%" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#111827", marginBottom: 20 },
  option: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: { fontSize: 16, color: "#111827" },
});
