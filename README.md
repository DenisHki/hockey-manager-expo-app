# hockey-manager-expo-app

Welcome to the Hockey App repository! 
This React Native application serves as a comprehensive platform for managing hockey team-related information, including player profiles, event schedules, and team details. The app is designed to provide users with easy access to player and event details, as well as the ability to add, edit, and delete information.

## Features

- **Player Management:** View a list of players, access detailed player profiles, and perform actions such as adding, editing, and deleting players.

- **Event Management:** Explore a schedule of events, including games, practices, and special occasions. Similar to player management, you can add, edit, and delete events.

- **User-Friendly Interface:** The app offers an intuitive and user-friendly interface, making it easy to navigate through different screens and perform desired actions.

  ## Technologies Used

- **React Native:** The framework for building the mobile app. 

- **Firebase:** Firebase is used for real-time database management and authentication. It provides a scalable and reliable backend for the app, enabling features like real-time updates.

- **Expo:** Expo is leveraged for quick and efficient development, providing a set of tools and services to simplify the development process. 

- **React Navigation:** Navigation is handled using the React Navigation library, which provides a customizable navigation solution for React Native apps. It enables smooth transitions between screens and a structured navigation flow. I used MaterialBottomTabNavigator and NativeStackNavigator.
 
- **React Native Components:** Utilized various React Native components such as `View`, `Text`, `FlatList`, `TextInput`, `Button`, `TouchableOpacity`, `Alert` and more to build a responsive and interactive UI.

- **MaterialCommunityIcons:** Integrated icons from the Material Community Icons library using the `MaterialCommunityIcons` component from the `@expo/vector-icons` package. This enhances the visual elements and user experience with recognizable icons for actions like deleting and editing events.

- **StyleSheet:** Applied styles to components using the `StyleSheet.create` method, ensuring a consistent and visually appealing design throughout the app.

- **GlobalStyles:** Defined a global styles object (`GlobalStyles`) to maintain consistency in colors throughout the app, promoting a cohesive design theme.

## Screenshots

<p align="center" style="margin-bottom: 20px;">
  <img src="https://github.com/DenisHki/hockey-manager-expo-app/blob/master/images/home.png" alt="Main Screen" width="300" style="margin-right: 40px">
  <img src="https://github.com/DenisHki/hockey-manager-expo-app/blob/master/images/players.png" alt="Players Screen" width="300">
</p>

<p align="center" style="margin-bottom: 20px;">
  <img src="https://github.com/DenisHki/hockey-manager-expo-app/blob/master/images/player_details.png" alt="Player Details Screen" width="300" style="margin-right: 40px">
  <img src="https://github.com/DenisHki/hockey-manager-expo-app/blob/master/images/events.png" alt="Events Screen" width="300">
</p>

<p align="center">
  <img src="https://github.com/DenisHki/hockey-manager-expo-app/blob/master/images/event_details.png" alt="Event Details Screen" width="300" style="margin-right: 40px">
  <img src="https://github.com/DenisHki/hockey-manager-expo-app/blob/master/images/add_player.png" alt="Add Player Screen" width="300">
</p>


## Getting Started

To run this application locally on your machine, follow these steps:

1. Clone this repository to your local machine using `git clone`.
2. Navigate to the project directory using `cd hockey-app`.
3. Install dependencies by running `npm install`.
4. Create a Firebase project and update the Firebase configuration in `util/firebase.js` with your project details.
5. Run the app using `npx expo start`.

Make sure you have Node.js, npm, and Expo CLI installed on your machine.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue. 
Feel free to fork the repository and submit a pull request for improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## Acknowledgments

Thank you for checking out the Hockey App! 
If you have any questions or feedback, feel free to reach out. 

