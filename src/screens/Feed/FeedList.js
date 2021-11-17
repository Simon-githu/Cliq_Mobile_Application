import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import FeedListData from "./FeedListData";
import * as Animatable from "react-native-animatable";
import tw from "tailwind-react-native-classnames";
import Img from "../../../assets/images/More.png";
import {Entypo} from "@expo/vector-icons"
// ==============================================================================================================
const FeedList = () => {
  return (
    <FlatList
      style={{ height: "100%" }}
      showsVerticalScrollIndicator={false}
      data={FeedListData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Animatable.View
          animation="slideInUp"
          style={styles.container}
        >
          {/* image view */}
          <View style={styles.imageView}>
            <Image source={item.image} />
          </View>

          <View style={{ flexDirection: "column",bottom:50}}>
            <View
              style={{
                left: 150,
                top: 80,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 11,
                }}
              >
                {item.date}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 11,
                }}
              >
                {item.time}
              </Text>
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={30}/>
              </TouchableOpacity>
            </View>
            {/* Name text view */}
            <View style={{ paddingLeft: 5 }}>
              <Text style={styles.txt}>{item.name}</Text>
            </View>

            {/* Title text view */}
            <View style={{ paddingLeft: 5, width: 200 }}>
              <Text style={{ color: "white", fontSize: 12 }}>{item.title}</Text>
            </View>
            {item.desc ? (
              <View style={{ paddingLeft: 15, width: 200 }}>
                <Text style={{ color: "white", fontSize: 11, top: 5 }}>
                  {item.desc}
                </Text>
              </View>
            ) : null}
            {item.pic ? (
              <Image style={{ left: 10, top: 10 }} source={item.pic} />
            ) : null}
          </View>
        </Animatable.View>
      )}
    />
  );
};

export default FeedList;
// ===========================================================================================================================
const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    margin: 6,
    flexDirection: "row",
    width: 350,
    borderRadius: 15,
    alignItems: "center",
    flex:1
  },
  imageView: {
    backgroundColor: "#191970",
    height: "100%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    width: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "white",
  },
});
