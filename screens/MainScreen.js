import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Discover the
        comprehensive schedule, including games, practices, and special events.
        Get all the details you need, and be the first to know about any changes
        or updates. Explore detailed player profiles featuring their names,
        positions, and an array of statistics of goals and assists. Dive into
        the world of your favorite players, and keep track of their outstanding
        contributions to the team.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 250, 
    height: 250, 
    borderRadius: 125,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#333",
  },
});

export default MainScreen;
