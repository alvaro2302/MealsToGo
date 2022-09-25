import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurantInfoCard.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  background-color: blue;
  padding: 16px;
`;
export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
