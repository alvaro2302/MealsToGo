import React,{useContext, useState} from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../services/location/location.context";
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = () => {
    const {search,keyword} = useContext(LocationContext);
    const [searchTerm,setSearchTerm] = useState(keyword);
    return (
        <SearchContainer>
            <Searchbar 
                placeholder="search a restaurant"
                value={searchTerm}
                onChangeText={setSearchTerm}
                onSubmitEditing={()=> search(searchTerm)}
            />
        </SearchContainer>
    )
}