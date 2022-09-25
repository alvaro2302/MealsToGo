import React from "react";
import styled from "styled-components";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.body}

  color: ${(props) => props.theme.colors.ui.error};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Raiting = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "my restaurant",
    images = ["https://picsum.photos/700"],
    address = "100 some random street",
    rating = 4,
    isOpenNow = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover key={name} source={{ uri: images[0] }} />
      <Info>
        <Title>{name}</Title>
        <Raiting>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Raiting>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
