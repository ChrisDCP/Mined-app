import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../services/FireBaseConfig"

export default function BooksScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Books"));
        const booksList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(booksList);
      } catch (error) {
        console.error("Error al traer libros:", error);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title?.toLowerCase().includes(search.toLowerCase()) ||
      book.author?.toLowerCase().includes(search.toLowerCase()) ||
      book.subject?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📚 Biblioteca</Text>
        <Text style={styles.headerSubtitle}>Explora y encuentra tus libros</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Buscar por título, autor o asignatura"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Lista de libros */}
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Reader", { book: item })}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/100/6C63FF/open-book.png",
              }}
              style={styles.bookImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookDetails}>
                {item.author || "Autor desconocido"}
              </Text>
              <Text style={styles.bookSubject}>
                {item.subject || "Sin categoría"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6" },
  header: {
    backgroundColor: "#6C63FF",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  headerSubtitle: { fontSize: 14, color: "#E0E0E0" },
  searchContainer: { padding: 15 },
  searchInput: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 14,
  },
  list: { paddingHorizontal: 15 },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    elevation: 3, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  bookImage: { width: 50, height: 50, marginRight: 15, tintColor: "#6C63FF" },
  cardContent: { flex: 1 },
  bookTitle: { fontSize: 16, fontWeight: "bold", color: "#1F2937" },
  bookDetails: { fontSize: 14, color: "#4B5563" },
  bookSubject: {
    fontSize: 12,
    color: "#6C63FF",
    marginTop: 4,
    fontWeight: "600",
  },
});
