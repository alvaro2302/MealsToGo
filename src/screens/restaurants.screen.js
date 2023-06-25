import React, {useContext} from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurantInfoCard.component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../components/utility/safe-area.component";
import { Search } from "../components/search.component";

import { RestaurantsContext } from "../services/restaurants/restaurant.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantsScreen = () => {
  const restaurantsContext = useContext(RestaurantsContext)
  return (<SafeArea>
    <Search/>
    <RestaurantList
      data={ restaurantsContext.restaurants}
      renderItem={( item) => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard key={item.name} />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
  );
}
