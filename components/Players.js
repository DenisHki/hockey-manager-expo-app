// Players.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { fetchPlayers } from "../services/firebaseService";
import { GlobalStyles } from "../constants/styles";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchAndSetPlayers = async () => {
      const playersData = await fetchPlayers();
      setPlayers(playersData);
    };

    fetchAndSetPlayers();
  }, [players]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Players Screen</Text>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id || item.firstName + item.lastName}
        renderItem={({ item }) => (
          <View style={styles.playerItem}>
            <View style={styles.playerSquare}>
              <Text style={styles.playerName}>{`${item.firstName} ${item.lastName}`}</Text>
              {/* Add more player details as needed */}
            </View>
          </View>
        )}
      />
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
  playerItem: {
    marginBottom: 16,
  },
  playerSquare: {
    backgroundColor: GlobalStyles.colors.lightblue,
    padding: 16,
    borderRadius: 8,
    alignItems: "center", 
    justifyContent: "center", 
  },
  playerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Players;
