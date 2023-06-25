import React from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurantInfoCard.component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../components/utility/safe-area.component";
import { Search } from "../components/search.component";


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
export const RestaurantsScreen = () => (
  <SafeArea>
    <Search/>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
