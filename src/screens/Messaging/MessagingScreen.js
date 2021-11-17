import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {SearchBar }from 'react-native-elements';
import { Badge } from 'react-native-elements';
import MessageList from './MessageList';

const MessagingScreen = () => {
    return (
        <View style={styles.container}>
        {/*============================================================================================================== */}
        <View style={{ top: 10 }}>
          <Text style={styles.title}>Messaging</Text>
          <View
            style={{
              height: 3,
              width: 23,
              backgroundColor: "#191970",
              alignSelf: "center",
            }}
          />
          
        </View>
        {/* ================================================================================================================ */}
        <Badge value="99+" status="error" containerStyle={{left:150,}} badgeStyle={{backgroundColor:"#191970"}}/>
        {/* ================================================================================================================= */}
        <SearchBar
          lightTheme
          autoCapitalize='none'
          placeholder="Search Messaging"
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
        {/* ========================================================================================================================== */}
        <MessageList/>
      </View>
    );
  };
  
  export default MessagingScreen;
  
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