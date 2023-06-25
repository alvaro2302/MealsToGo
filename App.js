import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import React from "react";
import { RestaurantsScreen } from "./src/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";
//import { restaurantsRequest } from "./src/services/restaurants/restaurants.service";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const tabBarIcon =
  (iconName) =>
  ({ color, size }) => {
    return <Ionicons name={iconName} size={size} color={color} />;
  };
const screenOptionsBar = ({ route }) => {
  let iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};
const Map = () => (
  <SafeArea>
    <Text> MAP </Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text> Settings </Text>
  </SafeArea>
);

export default function App() {
  const [oswalLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswalLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Restaurant"
              screenOptions={screenOptionsBar}
            >
              <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
