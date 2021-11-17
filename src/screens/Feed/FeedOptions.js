import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import * as Animatable from 'react-native-animatable';
import FeedOptionsData from "./FeedOptionsData";

const FeedOptions = () => {
  const [selected, setSelected] = useState(null);
  return (
    <FlatList
    style={{height:235,top:50}}
      showsVerticalScrollIndicator={false}
      data={FeedOptionsData}
      keyExtractor={(item) => item.id}
      numColumns={4}
      renderItem={({ item }) => (
        <Animatable.View
         animation="bounceIn"
               easing="ease-in"
         >
        <TouchableOpacity
          onPress={() => setSelected(item.id)}
          style={{
            borderRadius: 15,
    borderColor: "#191970",
    margin: 5,
    height: 30,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    
    
    backgroundColor:item.id === selected ?'#191970':'white'         
    }}
        >
          <Text style={{ 
              fontWeight: "bold", 
              margin: 8,
           
              color:item.id === selected ?'white':'black'
               }}>{item.title}</Text>
        </TouchableOpacity>
        </Animatable.View>
      )}
    />
  );
};

export default FeedOptions;

const styles = StyleSheet.create({
  container: {

  },
});
