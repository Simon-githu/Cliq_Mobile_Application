import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import MessageData from "./MessageData";
const MessageList = () => {
  return (
    <FlatList
     style={{flex:1}}
      showsVerticalScrollIndicator={false}
      data={MessageData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Animatable.View animation="slideInUp" style={styles.container}>
          <Image 
          style={{marginTop:10,marginBottom:10}}
          source={item.image} />
          <View
          style={{
              paddingLeft:10
          }}
          >
          <Text style={{fontWeight:'bold',color:'white'}}>{item.name}</Text>
          <Text style={{color:'white',width:210}}>{item.message}</Text>
          
          </View>
          
        </Animatable.View>
      )}
    />
  );
};

export default MessageList;

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
