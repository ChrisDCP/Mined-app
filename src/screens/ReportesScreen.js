import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const data = [
  { id: "1", titulo: "Libro leído: Ciencias Naturales", progreso: "100%" },
  { id: "2", titulo: "Libro leído: Matemáticas", progreso: "80%" },
  { id: "3", titulo: "Libro leído: Lengua y Literatura", progreso: "65%" },
];

export default function ReportesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Reportes de Lectura</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.bookTitle}>{item.titulo}</Text>
            <Text style={styles.progress}>Progreso: {item.progreso}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#111827", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  bookTitle: { fontSize: 16, fontWeight: "bold", color: "#6C63FF" },
  progress: { fontSize: 14, color: "#6B7280" },
});
