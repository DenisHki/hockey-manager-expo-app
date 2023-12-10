import { getDatabase, ref, push, set, get, remove } from "firebase/database";
import firebaseApp from "../util/firebase";

const playersRef = ref(getDatabase(firebaseApp), "players");
const eventsRef = ref(getDatabase(firebaseApp), "events");

// get all players
export const fetchPlayers = async () => {
  const snapshot = await get(playersRef);
  const players = snapshot.val();

  if (players) {
    const playersArray = Object.entries(players).map(([id, player]) => ({
      id,
      ...player,
    }));
    return playersArray;
  } else {
    return [];
  }
};

// get player by ID
export const fetchPlayerById = async (playerId) => {
  const playerSnapshot = await get(
    ref(getDatabase(firebaseApp), `players/${playerId}`)
  );
  const player = playerSnapshot.val();
  return player ? { id: playerId, ...player } : null;
};

// edit player by ID
export const updatePlayer = async (playerId, playerData) => {
  try {
    const playerRef = ref(getDatabase(firebaseApp), `players/${playerId}`);
    await set(playerRef, playerData);
  } catch (error) {
    console.error("Error updating player:", error);
  }
};

// add new player
export const addPlayer = async (playerData) => {
  const newPlayerRef = push(playersRef);
  await set(newPlayerRef, playerData);
  return newPlayerRef.key;
 
};

// delete player
export const deletePlayer = async (playerId) => {
  try {
    const playerRef = ref(getDatabase(firebaseApp), `players/${playerId}`);
    await remove(playerRef);
    //console.log(`Player with ID ${playerId} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting player:", error);
  }
};

// get all events
export const fetchEvents = async () => {
  const snapshot = await get(eventsRef);
  const events = snapshot.val();

  if (events) {
    const eventsArray = Object.entries(events).map(([id, events]) => ({
      id,
      ...events,
    }));
    return eventsArray;
  } else {
    return [];
  }
};

// get event by ID
export const fetchEventById = async (eventId) => {
  const eventSnapshot = await get(
    ref(getDatabase(firebaseApp), `events/${eventId}`)
  );
  const event = eventSnapshot.val();
  return event ? { id: eventId, ...event } : null;
};

// add new event
export const addEvent = async (eventData) => {
  try {
    const newEventRef = push(eventsRef);
    await set(newEventRef, eventData);
    return newEventRef.key;
  } catch (error) {
    console.error("Error adding new event:", error);
    return null;
  }
};

// edit event by ID
export const updateEvent = async (eventId, eventData) => {
  try {
    const eventRef = ref(getDatabase(firebaseApp), `events/${eventId}`);
    await set(eventRef, eventData);
  } catch (error) {
    console.error("Error updating event:", error);
  }
};

// delete event
export const deleteEvent = async (eventId) => {
  try {
    const eventRef = ref(getDatabase(firebaseApp), `events/${eventId}`);
    await remove(eventRef);
  } catch (error) {
    console.error("Error deleting event:", error);
  }
};
