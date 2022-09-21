import React from "react";
import styled from "styled-components";
import { Card } from "react-native-paper";
import { StyleSheet, Text } from "react-native";

const Title = styled.Text`
  padding: 16px;
`;
export const RestaurantInfo = ({ restaurant = {} }) => {
  const { name = "my restaurant" } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        style={styles.cover}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
