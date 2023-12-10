import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from "react-native";
import { fetchEvents } from "../services/firebaseService"; 
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";

const Events = () => {
  const [events, setEvents] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchAndSetEvents = async () => {
      const eventsData = await fetchEvents();
      setEvents(eventsData);
    };

    fetchAndSetEvents();
  }, [events]);

  const handleEventClick = (event) => {
    navigation.navigate("EventDetail", { event }); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events Screen</Text>
      <FlatList
        data={events}
        keyExtractor={(item, index) => `${item.id || index}`}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={styles.eventSquare}
            onPress={() => handleEventClick(item)}
          >
            <View style={styles.eventContainer}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventTitle}>{item.category}</Text>
              <Text style={styles.eventItem}>Date: {item.date}</Text>
              <Text style={styles.eventItem}>Time: {item.time}</Text>
              <Text style={styles.eventItem}>Location: {item.location}</Text>
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
  eventSquare: {
    backgroundColor: GlobalStyles.colors.lightblue,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  eventContainer: {
    alignItems: "center",
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  eventItem: {
    fontSize: 20,
  },
});

export default Events;
