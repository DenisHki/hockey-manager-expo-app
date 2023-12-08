import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { updatePlayer, fetchPlayerById } from "../services/firebaseService";

const EditPlayerForm = ({ route, navigation }) => {
  const { playerId } = route.params;
  const [playerData, setPlayerData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    goals: "",
    assists: "",
    points: "",
  });

  useEffect(() => {
    const fetchPlayerData = async () => {
      const player = await fetchPlayerById(playerId);
      setPlayerData(player);
    };

    fetchPlayerData();
  }, [playerId]);

  const handleInputChange = (field, value) => {
    setPlayerData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleUpdatePlayer = async () => {
    try {
      await updatePlayer(playerId, playerData);
      setPlayerData((prevData) => ({ ...prevData, ...playerData }));
      //console.log(`Player with ID ${playerId} updated successfully.`);
      Alert.alert("Success", "Player Updated Successfully");
      navigation.goBack();
    } catch (error) {
      //console.error("Error updating player:", error);
      Alert.alert("Error", "Unable to update player. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Player Form</Text>
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
      <Button title="Update Player" onPress={handleUpdatePlayer} />
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

export default EditPlayerForm;
