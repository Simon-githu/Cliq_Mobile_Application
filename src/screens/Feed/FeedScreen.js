import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FeedOptions from './FeedOptions'
import { SearchBar } from "react-native-elements";
import FeedList from './FeedList';



const FeedScreen = () => {
    const [search, setSearch] = useState(null);
    return (
        <View style={styles.container}>
        
        <View style={{top:10}}>
    <Text style={styles.title}>Feed</Text>
     <View style={{ height: 3, width: 23, backgroundColor: "#191970",alignSelf: "center"}}/>
     </View>
     <FeedOptions/>
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
        bottom:12
         }}
         onChangeText={(text)=>setSearch(text)}
         value={search}
      />
      <FeedList/>
     </View>
    )
}

export default FeedScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
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
})
