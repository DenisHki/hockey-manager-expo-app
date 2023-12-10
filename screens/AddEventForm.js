import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { addEvent } from "../services/firebaseService";

const AddEventForm = () => {
  const [eventData, setEventData] = useState({
    title: "",
    category: "",
    date: "",
    time: "",
    location: "",
  });

  const handleInputChange = (field, value) => {
    setEventData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddEvent = async () => {
    await addEvent(eventData);
    // Clear the input fields after adding an event
    setEventData({
      title: "",
      category: "",
      date: "",
      time: "",
      location: "",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Event Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={eventData.title}
        onChangeText={(text) => handleInputChange("title", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={eventData.category}
        onChangeText={(text) => handleInputChange("category", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={eventData.date}
        onChangeText={(text) => handleInputChange("date", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={eventData.time}
        onChangeText={(text) => handleInputChange("time", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={eventData.location}
        onChangeText={(text) => handleInputChange("location", text)}
      />
      <Button title="Add Event" onPress={handleAddEvent} />
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default AddEventForm;
