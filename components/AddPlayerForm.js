import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

const AddPlayerForm = ({ onAddPlayer }) => {
  const [playerName, setPlayerName] = useState("");

  const addPlayer = () => {
    if (playerName.trim() !== "") {
      onAddPlayer(playerName);
      setPlayerName("");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter player name"
        value={playerName}
        onChangeText={(text) => setPlayerName(text)}
      />
      <Button title="Add Player" onPress={addPlayer} />
    </View>
  );
};

export default AddPlayerForm;
