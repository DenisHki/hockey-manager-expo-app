import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { addPlayer } from "../services/firebaseService";

const AddPlayerForm = () => {
  const [playerData, setPlayerData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    goals: "",
    assists: "",
    points: "",
  });

  const handleInputChange = (field, value) => {
    setPlayerData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddPlayer = async () => {
    await addPlayer(playerData);
    // Clear the input fields after adding a player
    setPlayerData({
      firstName: "",
      lastName: "",
      number: "",
      goals: "",
      assists: "",
      points: "",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Player Form</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={playerData.firstName}
        onChangeText={(text) => handleInputChange("firstName", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={playerData.lastName}
        onChangeText={(text) => handleInputChange("lastName", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number"
        value={playerData.number}
        onChangeText={(text) => handleInputChange("number", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Goals"
        value={playerData.goals}
        onChangeText={(text) => handleInputChange("goals", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Assists"
        value={playerData.assists}
        onChangeText={(text) => handleInputChange("assists", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Points"
        value={playerData.points}
        onChangeText={(text) => handleInputChange("points", text)}
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
