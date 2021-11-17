import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import HomeOptions from "./HomeOptions";

//async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { selectCredentials, setIsSignedIn } from "../../slices/escpSpacesSlice";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = ({ navigation, route }) => {
  //redux
  const userCredentials = useSelector(selectCredentials);
  const dispatch = useDispatch();
  

  const clearLogin = () => {
    AsyncStorage.removeItem("cliqCredentials")
      .then(() => {
        dispatch(setIsSignedIn(false));
        navigation.navigate("SignIn");
      })
      .catch((error) => console.log(error));
    }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#191970" />
      <View>
        {/* <View style={{ bottom: 10 }}>
          <Text style={styles.title}>Menu</Text>
          <View
            style={{
              height: 3,
              width: 43,
              backgroundColor: "#191970",
              alignSelf: "center",
            }}
          />
        </View> */}

        <HomeOptions />
        {/* {userCredentials ? <Text>{userCredentials.email}</Text> : null}
        <Button onPress={clearLogin}>Logout</Button> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingTop: 25,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
  },
});
