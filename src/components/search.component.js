import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = () => {
    return (
        <SearchContainer>
            <Searchbar 
                placeholder="search a restaurant"
            />
        </SearchContainer>
    )
}