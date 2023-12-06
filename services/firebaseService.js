// firebaseService.js
import { getDatabase, ref, push, set, get } from 'firebase/database';
import firebaseApp from '../util/firebase';

const playersRef = ref(getDatabase(firebaseApp), 'players');
const eventsRef = ref(getDatabase(firebaseApp), 'events');

export const addPlayer = async (playerData) => {
  const newPlayerRef = push(playersRef);
  await set(newPlayerRef, playerData);
  return newPlayerRef.key;
};

export const fetchPlayers = async () => {
  const snapshot = await get(playersRef);
  const players = snapshot.val();
  return players ? Object.values(players) : [];
};

export const addEvent = async (eventData) => {
  const newEventRef = push(eventsRef);
  await set(newEventRef, eventData);
  return newEventRef.key;
};

export const fetchEvents = async () => {
  const snapshot = await get(eventsRef);
  const events = snapshot.val();
  return events ? Object.values(events) : [];
};
