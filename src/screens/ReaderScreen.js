import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ReaderScreen({ route, navigation }) {
  const { book } = route.params || {};
  const [bookmarks, setBookmarks] = useState([]);
  const storageKey = `bookmarks_${book?.id || "unknown"}`;

  useEffect(() => {
    // Abrir automáticamente el PDF en el navegador y volver al cerrar
    if (book?.url) {
      WebBrowser.openBrowserAsync(book.url).then(() => {
        // opcional: navigation.goBack();
      });
    }
    loadBookmarks();
  }, []);

  const loadBookmarks = async () => {
    try {
      const json = await AsyncStorage.getItem(storageKey);
      if (json) setBookmarks(JSON.parse(json));
    } catch (e) {
      console.log("Error cargando bookmarks", e);
    }
  };

  const saveBookmarks = async (newBookmarks) => {
    try {
      await AsyncStorage.setItem(storageKey, JSON.stringify(newBookmarks));
      setBookmarks(newBookmarks);
    } catch (e) {
      console.log("Error guardando bookmarks", e);
    }
  };

  const addBookmark = async () => {
    // Simulamos que el usuario marcó la "Página 10"
    const example = { id: Date.now().toString(), page: Math.floor(Math.random() * 300) + 1, note: "Revisar este apartado" };
    const newList = [example, ...bookmarks];
    await saveBookmarks(newList);
    Alert.alert("Marcador creado", `Página ${example.page} guardada.`);
  };

  const addHighlight = async () => {
    // Simulamos un "subrayado" guardado como nota
    const example = { id: Date.now().toString(), highlight: "Texto subrayado de ejemplo", page: Math.floor(Math.random() * 300) + 1 };
    const newList = [example, ...bookmarks];
    await saveBookmarks(newList);
    Alert.alert("Subrayado guardado", `Subrayado agregado (pág. ${example.page}).`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book?.title || "Lector de libros"}</Text>
      <Text style={styles.subtitle}>{book?.author || ""}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn} onPress={() => WebBrowser.openBrowserAsync(book?.url)}>
          <Text style={styles.actionText}>Abrir en navegador</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn} onPress={addBookmark}>
          <Text style={styles.actionText}>Marcar página</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn} onPress={addHighlight}>
          <Text style={styles.actionText}>Subrayar (simulado)</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "700", color:"#111827" }}>Marcadores y Subrayados (local)</Text>
        {bookmarks.length === 0 ? (
          <Text style={{ color:"#6B7280", marginTop:8 }}>No hay marcadores aún.</Text>
        ) : (
          bookmarks.map((b) => (
            <View key={b.id} style={styles.bookmark}>
              <Text style={{ fontWeight:"600" }}>{b.page ? `Pág. ${b.page}` : "Nota"}</Text>
              <Text style={{ color:"#6B7280" }}>{b.note || b.highlight}</Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:"#F9FAFB", padding:16 },
  title: { fontSize:18, fontWeight:"bold", color:"#111827" },
  subtitle: { color:"#6B7280", marginBottom:12 },
  actions: { flexDirection:"row", justifyContent:"space-between", marginTop:10 },
  actionBtn: { flex:1, backgroundColor:"#6C63FF", padding:10, borderRadius:10, marginHorizontal:4 },
  actionText: { color:"#fff", textAlign:"center", fontWeight:"700" },
  bookmark: { backgroundColor:"#fff", padding:10, borderRadius:10, marginTop:10, elevation:1 },
});
