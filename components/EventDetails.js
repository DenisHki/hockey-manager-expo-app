// need to

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { deleteEvent } from "../services/firebaseService";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { fetcheventById } from "../services/firebaseService";

const EventDetail = ({ route, navigation }) => {
  const [event, setEvent] = useState(route.params.event);

  const handleDeleteEvent = async () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this event?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            console.log(`Deleting event with ID: ${event.id}`);
            await deleteEvent(event.id);
            navigation.goBack();
          },
        },
      ]
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      // Fetch event data or update local state when the screen is focused
      const fetchData = async () => {
        const updatedEvent = await fetcheventById(event.id);
        setEvent(updatedEvent);
      };
      fetchData();
    }, [event.id])
  );

  const handleEditevent = () => {
    navigation.navigate("EditeventForm", { eventId: event.id });
  };

  return (
    <View style={styles.container}>
      <Text>Some text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});

export default EventDetail;
