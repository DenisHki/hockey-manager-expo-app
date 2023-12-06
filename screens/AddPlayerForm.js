import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const AddPlayerForm = ({ onAddPlayer }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [goals, setGoals] = useState("");
  const [assists, setAssists] = useState("");
  const [points, setPoints] = useState("");

  const handleAddPlayer = () => {
    const newPlayer = {
      firstName,
      lastName,
      number,
      goals,
      assists,
      points,
    };

    onAddPlayer(newPlayer);
    // Clear the input fields after adding a player
    setFirstName("");
    setLastName("");
    setNumber("");
    setGoals("");
    setAssists("");
    setPoints("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Player Form</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number"
        value={number}
        onChangeText={(text) => setNumber(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Goals"
        value={goals}
        onChangeText={(text) => setGoals(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Assists"
        value={assists}
        onChangeText={(text) => setAssists(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Points"
        value={points}
        onChangeText={(text) => setPoints(text)}
        keyboardType="numeric"
      />
      <Button title="Add Player" onPress={handleAddPlayer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default AddPlayerForm;
