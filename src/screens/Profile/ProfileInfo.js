import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import ProfileImage from "../../../assets/images/PersonCircle.png";
import * as Animatable from "react-native-animatable";
import { selectCredentials } from "../../slices/escpSpacesSlice";
import { useSelector } from "react-redux";
import NetInfo from "@react-native-community/netinfo";

const ProfileInfo = () => {
  const [networkConnection, setNetworkConnection] = useState(false);
  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected); console.log('Is internet?', state.isInternetReachable);
    setNetworkConnection( state.isConnected)
  });
  const userCredentials = useSelector(selectCredentials);

  
  return (
    <Animatable.View
      animation="fadeIn"
      easing="ease-in"
      style={{ flex: 1, paddingLeft: 5 }}
    >
      {/* first view */}
      <View style={styles.profileView_1}>
        <Image
          source={ProfileImage}
          style={{
            borderWidth: 5,
            borderColor: networkConnection ? "limegreen" : "red",
            borderRadius: 50,
          }}
        />

        <View style={styles.text}>
          <Text style={tw`text-white`}>
            {userCredentials.name + " " + userCredentials.surname}
          </Text>
          <Text style={{ marginTop: 5, fontSize: 11, color: "white" }}>
            Real estate investor | Venture
          </Text>
          <Text style={{ fontSize: 11, color: "white" }}>
            Venture Capitalist | Co_founder of escpSpaces
          </Text>
          <Text style={{ fontSize: 11, color: "white" }}>
            CEO of Lavourre capital management
          </Text>
        </View>

        <View style={{ bottom: 14, right: 50 }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={tw`text-white`}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* second view */}
      <View style={styles.profileView_2}>
        <Text style={tw`text-white`}>Achievements</Text>
        <Text style={{ marginTop: 5, fontSize: 11, color: "white" }}>
          Global entrepreneur of the year 2025
        </Text>
        <Text style={{ marginTop: 5, fontSize: 11, color: "white" }}>
          Fortune 500 winner of the year 2021
        </Text>
        <Text style={{ marginTop: 5, fontSize: 11, color: "white" }}>
          Forbes 30 under 30, 2025
        </Text>
      </View>
      {/* third view */}
      <View style={styles.profileView_3}>
        <Text style={tw`text-white`}>Career Journey</Text>
        <Text style={{ marginTop: 10, fontSize: 11, color: "white" }}>
          Construction manager at Palconi project (pty)ltd
        </Text>
        <Text style={{ fontSize: 11, color: "white" }}>2013-2018</Text>
        <Text style={{ marginTop: 5, fontSize: 11, color: "white" }}>
          Financial Manager at SeaShore investments
        </Text>
        <Text style={{ fontSize: 11, color: "white" }}>2018-2023</Text>
        <Text style={{ marginTop: 5, fontSize: 11, color: "white" }}>
          Founder and Director at Infinity Ventures
        </Text>
        <Text style={{ fontSize: 11, color: "white" }}>2023-present</Text>
        <Text style={{ marginTop: 5, fontSize: 11, color: "white" }}>
          Co_founder and Director at escpSpaces
        </Text>
        <Text style={{ fontSize: 11, color: "white" }}>2025-present</Text>
        <Text style={{ marginTop: 5, fontSize: 11, color: "white" }}>
          CEO at Lavourre capital management
        </Text>
        <Text style={{ fontSize: 11, color: "white" }}>2025-present</Text>
      </View>
      {/* forth view */}
      <View style={styles.profileView_4}>
        <Text style={tw`text-white`}>About</Text>
        {/* <Text style={{marginTop:10,fontSize:11,color:'white'}}>Construction manager at Palconi project (pty)ltd</Text>
        <Text style={{fontSize:11,color:'white'}}>2013-2018</Text>
        <Text style={{marginTop:5,fontSize:11,color:'white'}}>Financial Manager at SeaShore investments</Text>
        <Text style={{fontSize:11,color:'white'}}>2018-2023</Text>
        <Text style={{marginTop:5,fontSize:11,color:'white'}}>Founder and Director at Infinity Ventures</Text>
        <Text style={{fontSize:11,color:'white'}}>2023-present</Text>
        <Text style={{marginTop:5,fontSize:11,color:'white'}}>Co_founder and Director at escpSpaces</Text>
        <Text style={{fontSize:11,color:'white'}}>2025-present</Text>
        <Text style={{marginTop:5,fontSize:11,color:'white'}}>CEO at Lavourre capital management</Text>
        <Text style={{fontSize:11,color:'white'}}>2025-present</Text> */}
      </View>
      {/* fifth view */}
      <View style={styles.profileView_5}>
        <Text style={tw`text-white`}>Interests</Text>
        {/* <Text style={{marginTop:10,fontSize:11,color:'white'}}>Construction manager at Palconi project (pty)ltd</Text>
        <Text style={{fontSize:11,color:'white'}}>2013-2018</Text>
        <Text style={{marginTop:5,fontSize:11,color:'white'}}>Financial Manager at SeaShore investments</Text>
        <Text style={{fontSize:11,color:'white'}}>2018-2023</Text>
        <Text style={{marginTop:5,fontSize:11,color:'white'}}>Founder and Director at Infinity Ventures</Text>
        <Text style={{fontSize:11,color:'white'}}>2023-present</Text>
        <Text style={{marginTop:5,fontSize:11,color:'white'}}>Co_founder and Director at escpSpaces</Text>
        <Text style={{fontSize:11,color:'white'}}>2025-present</Text>
        <Text style={{marginTop:5,fontSize:11,color:'white'}}>CEO at Lavourre capital management</Text>
        <Text style={{fontSize:11,color:'white'}}>2025-present</Text> */}
      </View>
    </Animatable.View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  profileView_1: {
    flexDirection: "row",
    backgroundColor: "gray",
    borderRadius: 15,
    width: "99%",
    height: 166,
    paddingTop: 30,
    paddingLeft: 20,
    marginTop: 10,
  },
  profileView_2: {
    backgroundColor: "gray",
    width: "99%",
    height: 115,
    borderRadius: 15,
    paddingTop: 15,
    paddingLeft: 30,
    marginTop: 10,
  },
  profileView_3: {
    backgroundColor: "gray",
    width: "99%",
    height: 220,
    borderRadius: 15,
    paddingTop: 15,
    paddingLeft: 30,
    marginTop: 10,
  },
  profileView_4: {
    backgroundColor: "gray",
    width: "99%",
    height: 95,
    borderRadius: 15,
    paddingTop: 15,
    paddingLeft: 30,
    marginTop: 10,
  },
  profileView_5: {
    backgroundColor: "gray",
    width: "99%",
    height: 90,
    borderRadius: 15,
    paddingTop: 15,
    paddingLeft: 30,
    marginTop: 10,
  },
  text: {
    paddingTop: 15,
    paddingLeft: 10,
    width: 200,
  },
  btn: {
    backgroundColor: "#191970",
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    width: 96,
    borderRadius: 15,
  },
});
