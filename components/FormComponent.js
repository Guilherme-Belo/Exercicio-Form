import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FormComponent = () => {
  const [name, setName,] = useState("");
  const [email, setEmail,] = useState("");

  return (
    <View>
      <Text style={styles.text}> Nome: {name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.text}> Email:{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 40,
  },
  text: {
    fontSize: 20,
  },
});

export default FormComponent;
