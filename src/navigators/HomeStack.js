import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "../screens/Home/HomeScreen";
import FeedScreen from "../screens/Feed/FeedScreen";
import VideoMeetingScreen from "../screens/Video_Meeting/VideoMeetingScreen";
import BusinessEvaluationScreen from "../screens/Business_Evaluation/BusinessEvaluationScreen";
import BusinessListingScreen from "../screens/Business_Listing/BusinessListingScreen";
import MessagingScreen from "../screens/Messaging/MessagingScreen";
import BusinessFundingScreen from "../screens/Business_Funding/BusinessFundingScreen";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="FeedScreen"
        component={FeedScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="VideoMeetingScreen"
        component={VideoMeetingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BusinessEvaluationScreen"
        component={BusinessEvaluationScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BusinessListingScreen"
        component={BusinessListingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MessagingScreen"
        component={MessagingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BusinessFundingScreen"
        component={BusinessFundingScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
