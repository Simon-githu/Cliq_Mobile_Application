import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import BusinessListData from "./BusinessListData";
import * as Animatable from "react-native-animatable";

const BusinessLists = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={BusinessListData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Animatable.View animation="slideInUp" style={styles.container}>
          <Image source={item.image} style={{marginTop:5,marginBottom:5}} />
          {/* <Text style={styles.txt}>hi</Text> */}
        </Animatable.View>
      )}
    />
  );
};

export default BusinessLists;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    margin: 6,
    flexDirection: "row",
    width: 350,
    flex:1,
    borderRadius: 15,
    alignItems: "center",
    paddingLeft: 15,
  },
});
