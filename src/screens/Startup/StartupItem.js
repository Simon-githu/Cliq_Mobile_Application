import React from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";

const StartupItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Text style={styles.title}>{item.title}</Text>

      <View style={{ height: 2, width: 53, backgroundColor: "#191970",top:15 }} />
      <Image
        source={item.image}
        style={styles.image}
      />
      <View>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.description}>{item.description_2}</Text>
      </View>
    </View>
  );
};

export default StartupItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
    width:316,
    resizeMode:'contain'
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
  },
  description: {
    fontWeight: "500",
    color: "#000000",
    textAlign: "center",
    paddingHorizontal: 18,
    bottom:80
  },
});
