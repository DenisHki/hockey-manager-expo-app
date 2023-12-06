// PlayerDetail.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { deletePlayer } from "../services/firebaseService";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { fetchPlayerById } from "../services/firebaseService";

const PlayerDetail = ({ route, navigation }) => {
  const [player, setPlayer] = useState(route.params.player);

  const handleDeletePlayer = async () => {
    console.log(`Deleting player with ID: ${player.id}`);
    await deletePlayer(player.id);
    navigation.goBack(); // Go back to the previous screen after deletion
  };

  useFocusEffect(
    React.useCallback(() => {
      // Fetch player data or update local state when the screen is focused
      const fetchData = async () => {
        const updatedPlayer = await fetchPlayerById(player.id);
        setPlayer(updatedPlayer); // Update the player state
      };
      fetchData();
    }, [player.id])
  );

  const handleEditPlayer = () => {
    navigation.navigate("EditPlayerForm", { playerId: player.id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.playerSquare}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>First Name:</Text>
          <Text style={styles.detailText}>{player.firstName}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Last Name:</Text>
          <Text style={styles.detailText}>{player.lastName}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Number:</Text>
          <Text style={styles.detailText}>{player.number}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Goals:</Text>
          <Text style={styles.detailText}>{player.goals}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Assists:</Text>
          <Text style={styles.detailText}>{player.assists}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Points:</Text>
          <Text style={styles.detailText}>{player.points}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={handleDeletePlayer}
        >
          <MaterialCommunityIcons
            name="delete"
            size={60}
            color={GlobalStyles.colors.darkred}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEdit} onPress={handleEditPlayer}>
          <MaterialCommunityIcons
            name="pencil"
            size={60}
            color={GlobalStyles.colors.darkyellow}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  playerSquare: {
    backgroundColor: GlobalStyles.colors.lightblue,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  detailLabel: {
    fontWeight: "bold",
    fontSize: 24,
  },
  detailText: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  buttonDelete: {
    backgroundColor: GlobalStyles.colors.darkred,
    padding: 60,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonEdit: {
    backgroundColor: GlobalStyles.colors.darkyellow,
    padding: 60,
    borderRadius: 20,
    alignItems: "center",
  },
});

export default PlayerDetail;
