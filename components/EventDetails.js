import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { deleteEvent } from "../services/firebaseService";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { fetchEventById } from "../services/firebaseService";

const EventDetail = ({ route, navigation }) => {
  //console.log("Route params:", route.params);
  const [event, setEvent] = useState(route.params.event);

  const handleDeleteEvent = async () => {
    if (event.id) {
      Alert.alert(
        "Confirm Deletion",
        `Are you sure you want to delete the event: ${event.title}?`,
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
    } else {
      console.warn("Event ID is undefined");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // Fetch event data or update local state when the screen is focused
      const fetchData = async () => {
        // Check if 'event' is truthy before trying to access properties
        if (event && event.id) {
          const updatedEvent = await fetchEventById(event.id);
          setEvent(updatedEvent);
        }
      };
      fetchData();
    }, [event?.id]) // Use optional chaining to safely access 'id'
  );

  const handleEditEvent = () => {
    navigation.navigate("EditEventForm", { eventId: event.id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text
          style={styles.detailTitle}
        >{`${event.title} (${event.category})`}</Text>
      </View>
      <View style={styles.eventDetails}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Date: </Text>
          <Text style={styles.detailText}>{event.date}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Time: </Text>
          <Text style={styles.detailText}>{event.time}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Location: </Text>
          <Text style={styles.detailText}>{event.location}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={handleDeleteEvent}
        >
          <MaterialCommunityIcons
            name="delete"
            size={60}
            color={GlobalStyles.colors.orangered}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEdit} onPress={handleEditEvent}>
          <MaterialCommunityIcons
            name="pencil"
            size={60}
            color={GlobalStyles.colors.orange}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  eventDetails: {
    backgroundColor: GlobalStyles.colors.lightblue,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },
  detailTitle: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
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

export default EventDetail;
