import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated
} from "react-native";
import { askGemini } from "../services/GeminiAI";

export default function AIChatBubble() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setVisible(!visible);

  const send = async () => {
    if (!message.trim()) return;

    setLoading(true);
    const result = await askGemini(message);
    setAnswer(result);
    setLoading(false);
  };

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      <TouchableOpacity style={styles.floatingButton} onPress={toggleChat}>
        <Text style={{ color: "white", fontSize: 20 }}>💬</Text>
      </TouchableOpacity>

      {/* BURBUJA DE CHAT */}
      {visible && (
        <View style={styles.chatContainer}>
          <Text style={styles.title}>Asistente IA</Text>

          <TextInput
            style={styles.input}
            placeholder="Haz tu pregunta..."
            value={message}
            onChangeText={setMessage}
          />

          <TouchableOpacity style={styles.sendButton} onPress={send}>
            <Text style={styles.sendText}>
              {loading ? "..." : "Enviar"}
            </Text>
          </TouchableOpacity>

          {answer !== "" && (
            <View style={styles.answerBox}>
              <Text style={styles.answer}>{answer}</Text>
            </View>
          )}

          <TouchableOpacity onPress={toggleChat}>
            <Text style={styles.close}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#6C63FF",
    padding: 15,
    borderRadius: 100,
    elevation: 5,
    zIndex: 5000,
  },
  chatContainer: {
    position: "absolute",
    bottom: 90,
    right: 20,
    width: 260,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    elevation: 10,
    zIndex: 6000,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: "#6C63FF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  sendText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  answerBox: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  answer: {
    fontSize: 14,
  },
  close: {
    textAlign: "center",
    color: "#6C63FF",
    fontWeight: "bold",
  },
});
