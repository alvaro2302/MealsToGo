import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import React from "react";
import { RestaurantsScreen } from "./src/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [oswalLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswalLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}
