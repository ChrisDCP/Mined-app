// src/screens/RecomendacionesScreen.js
import React, { useEffect, useState } from "react";
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity, Image
} from "react-native";

// Si luego usas firestore, sustituye el mock por getDocs(...)
const mock = [
  { id: "r1", title: "Matemáticas 7°", author: "MINED", subject: "Matemáticas", url: "https://tu-proyecto.web.app/matematicas7.pdf" },
  { id: "r2", title: "Lengua 8°", author: "MINED", subject: "Lengua", url: "https://tu-proyecto.web.app/lengua8.pdf" },
  { id: "r3", title: "Historia 9°", author: "MINED", subject: "Historia", url: "https://tu-proyecto.web.app/historia9.pdf" },
];

export default function RecomendacionesScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulamos fetch - reemplazar por Firestore si deseas
    setBooks(mock);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomendados para ti</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Reader", { book: item })}>
            <Image source={{ uri: "https://img.icons8.com/ios-filled/100/6C63FF/open-book.png" }} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author || "Autor desconocido"}</Text>
              <Text style={styles.bookSubject}>{item.subject}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:"#F9FAFB", padding:16 },
  title: { fontSize:20, fontWeight:"bold", color:"#111827", marginBottom:12 },
  card: { flexDirection:"row", backgroundColor:"#fff", padding:12, borderRadius:12, elevation:2, alignItems:"center" },
  image: { width:48, height:48, marginRight:12, tintColor:"#6C63FF" },
  content: { flex:1 },
  bookTitle: { fontSize:16, fontWeight:"700", color:"#111827" },
  bookAuthor: { fontSize:13, color:"#6B7280" },
  bookSubject: { fontSize:12, color:"#6C63FF", marginTop:4, fontWeight:"600" },
});
