import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//Apploading
import AppLoading from "expo-app-loading";

//screens
import StartupScreen from "../screens/Startup/StartupScreen";
import SignInScreen from "../screens/SignIn/SignInScreen";
import SignUpScreen from "../screens/SignUp/SignUpScreen";
import TabStack from "./TabStack";

import { selectIsSigned, setCredentials, setIsSignedIn } from "../slices/escpSpacesSlice";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#ffffff", elevation: 0 },
  headerBack: { backgroundColor: "red" },
  headerTitle: null,
  headerTitleStyle: { color: "white" },
  headerTintColor: "#000000",
};

const RootStack = () => {
  //redux
  const isSignedIn = useSelector(selectIsSigned);
  const dispatch = useDispatch();

  const [appReady, setAppReady] = useState(false);

  const checkLoginCredentials = () => {
    //use async get method and pass key that we use to store credentials in the async storage
    AsyncStorage.getItem("cliqCredentials")
      .then((result) => {
        //check if result is not empty
        if (result !== null) {
          //   setStoredCredentials(JSON.parse(result));

          console.log(JSON.parse(result))
          dispatch(setIsSignedIn(true));
          dispatch(setCredentials(JSON.parse(result)));
        } else {
          //   setStoredCredentials(null);
          dispatch(setIsSignedIn(false));
          dispatch(setCredentials(null));
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appReady) {
    return (
      <AppLoading
        startAsync={checkLoginCredentials}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*
         */}
        {isSignedIn ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="TabStack"
            component={TabStack}
          />
        ) : (
          <Stack.Group>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Startup"
              component={StartupScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SignIn"
              component={SignInScreen}
            />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
