import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hola, User 👋</Text>
        <Text style={styles.subGreeting}>¿Listo para aprender algo nuevo hoy?</Text>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>📚 Nuevos libros disponibles</Text>
      </View>

      {/* Accesos rápidos */}
      <Text style={styles.sectionTitle}>Accesos rápidos</Text>
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Books")}
        >
          <Text style={styles.actionIcon}>📖</Text>
          <Text style={styles.actionText}>Biblioteca</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionIcon}>⭐</Text>
          <Text style={styles.actionText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.actionIcon}>👤</Text>
          <Text style={styles.actionText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Recomendados */}
      <Text style={styles.sectionTitle}>Recomendados</Text>
      <View style={styles.recommendedContainer}>
        <View style={styles.bookCard}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/100/6C63FF/open-book.png" }}
            style={styles.bookImage}
          />
          <Text style={styles.bookTitle}>Harry Potter</Text>
          <Text style={styles.bookAuthor}>J.K Rowling</Text>
        </View>

        <View style={styles.bookCard}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/100/6C63FF/open-book.png" }}
            style={styles.bookImage}
          />
          <Text style={styles.bookTitle}>Cálculo Básico</Text>
          <Text style={styles.bookAuthor}>MINED</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 20 },
  header: { marginBottom: 25 },
  greeting: { fontSize: 22, fontWeight: "bold", color: "#111827" },
  subGreeting: { fontSize: 15, color: "#6B7280", marginTop: 5 },

  banner: {
    backgroundColor: "#6C63FF",
    padding: 18,
    borderRadius: 15,
    marginBottom: 30,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  bannerText: { color: "#fff", fontSize: 16, fontWeight: "bold", textAlign: "center" },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 15,
  },

  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  actionCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 12,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  actionIcon: { fontSize: 28, marginBottom: 6 },
  actionText: { fontSize: 14, fontWeight: "600", color: "#374151" },

  recommendedContainer: { flexDirection: "row", justifyContent: "space-between" },
  bookCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 5,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  bookImage: { width: 40, height: 40, marginBottom: 10, tintColor: "#6C63FF" },
  bookTitle: { fontSize: 15, fontWeight: "bold", color: "#111827" },
  bookAuthor: { fontSize: 13, color: "#6B7280" },
});
