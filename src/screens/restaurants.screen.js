import React, {useCallback, useContext} from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurantInfoCard.component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantsContext } from "../services/restaurants/restaurant.context";
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const LoadingSpinner = styled(ActivityIndicator)`
  margin-left:-25;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const {restaurants,isLoading,error} = useContext(RestaurantsContext);

  return (

    <SafeArea>
      
      
      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner animating={isLoading} color={"red"} size={"large"}/>
        </LoadingContainer>
        )
      }
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
