import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { fetchPlayers } from "../services/firebaseService";
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchAndSetPlayers = async () => {
      const playersData = await fetchPlayers();
      setPlayers(playersData);
    };

    fetchAndSetPlayers();
  }, [players]);

  const handlePlayerClick = (player) => {
    navigation.navigate("PlayerDetail", { player });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Players Screen</Text>
      <FlatList
        data={players}
        keyExtractor={(item, index) => `${item.id || index}`}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={styles.playerSquare}
            onPress={() => handlePlayerClick(item)}
          >
            <View style={styles.playerNameContainer}>
              <Text
                style={styles.playerName}
              >{`${item.firstName} ${item.lastName}`}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  playerSquare: {
    backgroundColor: GlobalStyles.colors.lightblue,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  playerNameContainer: {
    alignItems: "center", 
  },
  playerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Players;
