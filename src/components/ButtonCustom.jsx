import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function ButtonCustom({ isActive, handleStartStop }) {
  return (
    <TouchableOpacity style={styles.button} onPress={handleStartStop}>
      <Text style={styles.buttonText}>{isActive ? "STOP" : "START"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
});
