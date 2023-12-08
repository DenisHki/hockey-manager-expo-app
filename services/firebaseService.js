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

export const updatePlayer = async (playerId, playerData) => {
  try {
    const playerRef = ref(getDatabase(firebaseApp), `players/${playerId}`);
    await set(playerRef, playerData);
    //console.log(`Player with ID ${playerId} updated successfully.`);
  } catch (error) {
    //console.error("Error updating player:", error);
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
    //console.log("Player reference:", playerRef.toString());
    await remove(playerRef);
    //console.log(`Player with ID ${playerId} deleted successfully.`);
  } catch (error) {
    //console.error("Error deleting player:", error);
  }
};

// get all events
export const fetchEvents = async () => {
  const snapshot = await get(eventsRef);
  const events = snapshot.val();
  return events ? Object.values(events) : [];
};

// add new event
export const addEvent = async (eventData) => {
  const newEventRef = push(eventsRef);
  await set(newEventRef, eventData);
  return newEventRef.key;
};
