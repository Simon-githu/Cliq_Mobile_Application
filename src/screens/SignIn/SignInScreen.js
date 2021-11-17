import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Image, Input, Button, CheckBox } from "react-native-elements";
import logo from "../../../assets/escpSpacesLogo.png";
import { TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import axios from "axios";

//async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, setIsSignedIn } from "../../slices/escpSpacesSlice";
//===========================================================================================================================
const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [remember, setRemember] = useState(false);
  const [userData, setUserData] = useState({});
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState();
  const [cred, setCred] = useState();
  //   redux
  const dispatch = useDispatch();
//==================================================================================================================functions
  //Sign in function
  const signIn = () => {
    const credentials = { email: email.trim(), password: password.trim() };
    setCred({ email: email.trim(), password: password.trim() });
    setIsSubmitting(true);
    const url = "https://agile-reef-73771.herokuapp.com/user/signin";
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, user, type } = result;

        if (status === "FAILED") {
          setIsSubmitting(false);
          if (type === "password") {
            setPasswordError(message);
          } else if (type === "email") {
            setEmailError(message);
          } else if (type === "credentials") {
            setEmailError(message);
            setPasswordError(message);
          }
        } else if (status === "SUCCESS") {
          setIsSubmitting(false);
          dispatch(setIsSignedIn(true));
          user.map((item) => {
            const {
              email,
              gender,
              name,
              surname,
              dateOfBirth,
              mobileNumber,
              accountType,
            } = item;
            console.log(item);
            dispatch(
              setCredentials({
                email: email,
                name: name,
                surname: surname,
                gender: gender,
                dob: dateOfBirth,
                mobile: mobileNumber,
              })
            );
          });

          if (remember == true) {
            //   passing user data to async so when the app reloads because it will auto matically login because the user click remember me
            user.map((item) => {
              const {
                email,
                gender,
                name,
                surname,
                dateOfBirth,
                mobileNumber,
                accountType,
              } = item;
              AsyncStorage.setItem(
                "cliqCredentials",
                JSON.stringify({
                  email: email,
                  name: name,
                  surname: surname,
                  gender: gender,
                  dob: dateOfBirth,
                  mobile: mobileNumber,
                })
              )
                .then(() => {
                  setMessage(message, status);
                })
                .catch((error) => {
                  console.log(error);
                  setMessage("Persisting login failed");
                });
            });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
//===========================================================================================================================
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={logo}
        style={{ width: 400, height: 400, top: 10 }}
      />

      <View style={styles.inputContainer}>
        <Input
          autofocus
          type="email"
          leftIcon={!email ? <FontAwesome name="envelope" size={20} /> : null}
          label="Email Address"
          labelStyle={{ color: "#000000" }}
          value={email}
          onChangeText={(text) => {
            setEmail(text), setEmailError();
          }}
          errorMessage={emailError}
        />
        <Input
          type="password"
          leftIcon={!password ? <FontAwesome name="lock" size={24} /> : null}
          secureTextEntry={showPassword}
          label="Password"
          labelStyle={{ color: "#000000" }}
          value={password}
          onChangeText={(text) => {
            setPassword(text), setPasswordError();
          }}
          rightIcon={
            showPassword ? (
              <Entypo
                name="eye-with-line"
                size={24}
                onPress={() => setShowPassword(!showPassword)}
              />
            ) : (
              <Entypo
                name="eye"
                size={24}
                onPress={() => setShowPassword(!showPassword)}
              />
            )
          }
          onSubmitEditing={signIn}
          errorMessage={passwordError}
        />
      </View>

      <CheckBox
        containerStyle={styles.checkbox}
        title="Remember Me"
        checked={remember}
        onPress={() => setRemember(!remember)}
        checkedColor="#20F5A1"
      />
      <Button
        buttonStyle={{ backgroundColor: "#191970", borderRadius: 5 }}
        containerStyle={styles.button}
        title={
          isSubmitting ? (
            <ActivityIndicator size={23.5} color="#ffffff" />
          ) : (
            "Sign In"
          )
        }
        onPress={signIn}
        disabled={isSubmitting}
        disabledStyle={{ backgroundColor: "#191970" }}
      />

      <TouchableOpacity style={styles.fotgotPassword}>
        <Text>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    
  },
  inputContainer: {
    width: 310,
    bottom:80
  },

  button: {
    width: 315,
    height: 60,
    bottom:90
  },
  checkbox: {
    backgroundColor: "white",
    borderWidth: 0,
    right: 75,
    bottom: 95,
  },
  fotgotPassword: {
    fontSize: 11,
    fontWeight: "400",
    left: 100,
    height: 85,
    bottom: 95,
  },
});
