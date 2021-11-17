//import liraries
import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
// Screens
import NotificationScreen from "../screens/Notifications/NotificationScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import MenuScreen from "../screens/Settings/SettingsScreen";
import RootStack from "./RootStack";
import HomeScreen from "../screens/Home/HomeScreen";
import HomeStack from "./HomeStack";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Tab = createBottomTabNavigator();

// create a component
const TabStack = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 20,
            marginHorizontal: 20,
          
            // Max Height...
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName;

          //   if (route.name === "HomeStack") {
          //     iconName = focused ? "ios-home-outline" : "ios-home-outline";
          //   } else if (route.name === "NotificationScreen") {
          //     iconName = focused
          //       ? "ios-notifications-outline"
          //       : "ios-notifications-outline";
          //   } else if (route.name === "SearchScreen") {
          //     iconName = focused ? "ios-calendar-outline" : "ios-calendar-outline";
          //   } else if (route.name === "ProfileScreen") {
          //     iconName = focused ? "ios-person-outline" : "ios-person-outline";
          //   } else if (route.name === "SettingsScreen") {
          //     iconName = focused ? "ios-settings-outline" : "ios-settings-outline";
          //   }
          //   // You can return any component that you like here!
          //   return <Ionicons name={iconName} size={30} color={color} />;
          // },
          // tabBarLabel: () => {
          //   return null;
          // },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          // Floating Tab Bar...
        })}
      >
      {/* ========================================================================TabScreen */}
        <Tab.Screen
      
          options={{
            
            tabBarLabel: "Home",
    tabBarActiveTintColor:"#191970",
    tabBarInactiveTintColor:"grey",
            headerShown: false,
            tabBarLabelStyle:{bottom:4},
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 16,
                }}
              >
                <Ionicons
                  name="home"
                  size={20}
                  color={focused ? "#191970" : "gray"}
                />
              </View>
            )
          }}
          listeners={({ navigation }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
      
          navigation.navigate('HomeScreen')
      
          }
        })}
          name="HomeStack"
          component={HomeStack}
        />
        {/* ========================================================================TabScreen */}
        <Tab.Screen
          options={{
            tabBarLabel: "Notification",
            tabBarActiveTintColor:"#191970",
            tabBarInactiveTintColor:"grey",
            headerShown: false,
            tabBarLabelStyle:{bottom:4},
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 16,
                }}
              >
                <Ionicons
                  name="notifications"
                  size={20}
                  color={focused ? "#191970" : "gray"}
                />
              </View>
            ),
          }}
          listeners={() => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth()*1,
              useNativeDriver: true
            }).start();
          }
        })}
          name="NotificationScreen"
          component={NotificationScreen}
        />
        {/* ========================================================================TabScreen */}
        <Tab.Screen
          options={{
            tabBarLabel: "Profile",
            tabBarActiveTintColor:"#191970",
            tabBarInactiveTintColor:"grey",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#191970",
              elevation: 0,
            },
            tabBarLabelStyle:{bottom:4},
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 16,
                }}
              >
                <Ionicons
                  name="person-sharp"
                  size={20}
                  color={focused ? "#191970" : "gray"}
                  />
              </View>
            ),
          }}
          listeners={() => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth()*2,
              useNativeDriver: true
            }).start();
          }
        })}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        {/* ========================================================================TabScreen */}
        <Tab.Screen
          options={{
            tabBarLabel: "Calendar",
            tabBarActiveTintColor:"#191970",
    tabBarInactiveTintColor:"grey",
            headerShown: false,
            tabBarLabelStyle:{bottom:4},
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 16,
                }}
              >
                <Ionicons
                  name="ios-calendar"
                  size={20}
                  color={focused ? "#191970" : "gray"}
                  />
              </View>
            ),
          }}
          listeners={() => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth()*3,
              useNativeDriver: true
            }).start();
          }
        })}
          name="SearchScreen"
          component={SearchScreen}
        />
        {/* ========================================================================TabScreen */}
        <Tab.Screen
          options={{
            tabBarLabel: "Settings",
            tabBarActiveTintColor:"#191970",
    tabBarInactiveTintColor:"grey",
            headerShown: false,
            tabBarLabelStyle:{bottom:4},
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 16,
                }}
              >
                <Ionicons
                  name="settings"
                  size={20}
                  color={focused ? "#191970" : "gray"}
                  />
              </View>
            ),
          }}
          listeners={() => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth()*4,
              useNativeDriver: true
            }).start();
          }
        })}
          name="SettingsScreen"
          component={SettingsScreen}
        />
        {/* ======================================================================== */}
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 4,
          backgroundColor: "#191970",
          position: "absolute",
          bottom: 80,
          // Horizontal Padding = 20...
          left: 50,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </>
  );
};

//make this component available to the app
export default TabStack;

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}