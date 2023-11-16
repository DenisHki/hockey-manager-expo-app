import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import AddPlayerForm from "../components/AddPlayerForm"; 

const Players = () => {
  const [playersList, setPlayersList] = useState([]);

  const handleAddPlayer = (playerName) => {
    setPlayersList((prevPlayers) => [...prevPlayers, playerName]);
  };

  return (
    <View>
      <Text>Players Screen</Text>
      <AddPlayerForm onAddPlayer={handleAddPlayer} />
      <FlatList
        data={playersList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default Players;
