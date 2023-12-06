import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const AddEventForm = ({ onAddEvent }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const handleAddEvent = () => {
    const newEvent = {
      title,
      category,
      date,
      time,
      location,
    };

    onAddEvent(newEvent);
    // Clear the input fields after adding an event
    setTitle("");
    setCategory("");
    setDate("");
    setTime("");
    setLocation("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Event Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={(text) => setCategory(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={(text) => setDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={(text) => setTime(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={(text) => setLocation(text)}
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
