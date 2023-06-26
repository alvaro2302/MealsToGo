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
  const {restaurants,isLoading,error} = useContext(RestaurantsContext)
  return (<SafeArea>
    <Search/>
    <RestaurantList
      data={ restaurants}
      renderItem={( {item, index}) => (
        <Spacer position="bottom" size="large"  >
          <RestaurantInfoCard restaurant= {item} uniqued= {index}/>
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
  );
}
