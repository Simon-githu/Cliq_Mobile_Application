import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";

const BusinessFundingScreen = () => {
    const [search, setSearch] = useState(null);
  return (
    <View style={styles.container}>
      <View style={{ top: 10 }}>
        <Text style={styles.title}>Business funding</Text>
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
        placeholder="Search Feed"
     round
     containerStyle={{
         backgroundColor:'white',
         width:320,
        borderTopColor:'white',
        borderBottomColor:'white',
         alignItems:'center',
        bottom:200
         }}
         onChangeText={(text)=>setSearch(text)}
         value={search}
      />
    </View>
  );
};

export default BusinessFundingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
  },
});
