import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from "./constants/styles";
import PlayerDetail from "./components/PlayerDetail";
import EditPlayerForm from "./screens/EditPlayerForm";

import { StatusBar } from "expo-status-bar";
import MainScreen from "./screens/MainScreen";
import Players from "./components/Players";
import AddPlayerForm from "./screens/AddPlayerForm";
import AddEventForm from "./screens/AddEventForm";
import Events from "./components/Events";
import Icon from "react-native-vector-icons/Ionicons";

const BottomTabs = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MainStackScreen"
      component={MainScreen}
      options={{
        title: "Home",
        headerStyle: {
          backgroundColor: GlobalStyles.colors.darkblue,
        },
        headerTintColor: GlobalStyles.colors.orange,
      }}
    />
  </Stack.Navigator>
);

const PlayersStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="PlayersStackScreen"
      component={Players}
      options={{
        title: "Players",
        headerStyle: {
          backgroundColor: GlobalStyles.colors.darkblue,
        },
        headerTintColor: GlobalStyles.colors.orange,
        headerRight: () => (
          <Icon
            name="add"
            color={GlobalStyles.colors.orange}
            size={26}
            style={{ marginRight: 16 }}
            onPress={() => navigation.navigate("AddPlayerForm")}
          />
        ),
      }}
    />
    <Stack.Screen
      name="PlayerDetail"
      component={PlayerDetail}
      options={{
        title: "Player Detail",
        headerStyle: {
          backgroundColor: GlobalStyles.colors.darkblue,
        },
        headerTintColor: GlobalStyles.colors.orange,
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      name="EditPlayerForm"
      component={EditPlayerForm}
      options={{
        title: "Edit Player",
        headerStyle: {
          backgroundColor: GlobalStyles.colors.darkblue,
        },
        headerTintColor: GlobalStyles.colors.orange,
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      name="AddPlayerForm"
      component={AddPlayerForm}
      options={{
        title: "Add Player",
        headerStyle: {
          backgroundColor: GlobalStyles.colors.darkblue,
        },
        headerTintColor: GlobalStyles.colors.orange,
        headerTitleAlign: "center",
      }}
    />
  </Stack.Navigator>
);

const EventsStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="EventsStackScreen"
      component={Events}
      options={{
        title: "Events",
        headerStyle: {
          backgroundColor: GlobalStyles.colors.darkblue,
        },
        headerTintColor: GlobalStyles.colors.orange,
        headerRight: () => (
          <Icon
            name="add"
            color={GlobalStyles.colors.orange}
            size={26}
            style={{ marginRight: 16 }}
            onPress={() => navigation.navigate("AddEventForm")}
          />
        ),
      }}
    />
    <Stack.Screen
      name="AddEventForm"
      component={AddEventForm}
      options={{
        title: "Add Event",
        headerStyle: {
          backgroundColor: GlobalStyles.colors.darkblue,
        },
        headerTintColor: GlobalStyles.colors.orange,
        headerTitleAlign: "center",
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <BottomTabs.Navigator
        initialRouteName="MainScreen"
        activeColor={GlobalStyles.colors.orange}
        inactiveColor={GlobalStyles.colors.white}
        barStyle={{ backgroundColor: GlobalStyles.colors.darkblue }}
        shifting={true}
      >
        <BottomTabs.Screen
          name="MainScreen"
          component={MainStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Rooster"
          component={PlayersStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="people" color={color} size={26} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Events"
          component={EventsStack}
          options={{
            tabBarLabel: "Events",
            tabBarIcon: ({ color }) => (
              <Icon name="calendar" color={color} size={26} />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
