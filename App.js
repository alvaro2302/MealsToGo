import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "./src/components/restaurantInfo.component";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.containerPrincipal}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.container}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
  },
  search: {
    padding: 16,
  },

  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
