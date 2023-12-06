// Events.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { fetchEvents } from "../services/firebaseService";
import { GlobalStyles } from "../constants/styles";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchAndSetEvents = async () => {
      const eventsData = await fetchEvents();
      setEvents(eventsData);
    };

    fetchAndSetEvents();
  }, [events]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events Screen</Text>
      <FlatList
        data={events}
        keyExtractor={(item, index) => `${item.id || index}`}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <View style={styles.eventSquare}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDate}>{item.date}</Text>
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
  eventItem: {
    marginBottom: 16,
  },
  eventSquare: {
    backgroundColor: GlobalStyles.colors.lightblue,
    padding: 16,
    borderRadius: 8,
    alignItems: "center", 
    justifyContent: "center", 
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 16,
  },
});

export default Events;
