import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import tw from "tailwind-react-native-classnames";
import ProfileInfo from "./ProfileInfo";


const ProfileScreen = () => {
    
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* <View>
        <Text style={styles.title}>Profile</Text>
      
      </View> */}
      {/* <View
          style={{
            height: 3,
            width: 43,
            backgroundColor: "#191970",
            alignSelf: "center",
            position: "absolute",
           bottom:2
          }}
        /> */}
      <ProfileInfo/>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
 
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
  },
  profileView_3:{
    backgroundColor: "gray",
    width:350,
    height:220,
    borderRadius: 10,
    paddingTop:15,
        paddingLeft:30,
      },
});
