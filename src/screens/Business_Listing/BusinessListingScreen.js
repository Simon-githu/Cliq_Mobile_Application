import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import BusinessLists from "./BusinessLists";

const BusinessListingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ top: 10 }}>
        <Text style={styles.title}>Listed</Text>
        <View
          style={{
            height: 3,
            width: 23,
            backgroundColor: "#191970",
            alignSelf: "center",
          }}
        />
      </View>
      <SearchBar
        lightTheme
        autoCapitalize='none'
        placeholder="Search Listed"
     round
     containerStyle={{
         backgroundColor:'white',
         width:320,
        borderTopColor:'white',
        borderBottomColor:'white',
        marginTop:20
         
         }}
        // onChangeText={this.updateSearch}
        // value={search}
      />
      <BusinessLists/>
    </View>
  );
};

export default BusinessListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  alignItems: 'center',
    backgroundColor: "white",
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
  },
});
