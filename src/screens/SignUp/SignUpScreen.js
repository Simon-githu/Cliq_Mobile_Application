import React, { useState } from 'react'
import { StyleSheet, Text, View,ScrollView,ActivityIndicator } from 'react-native'
import { CheckBox, Input,Button } from 'react-native-elements'
import { FontAwesome,FontAwesome5,Foundation,Entypo} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios'
import * as Animatable from 'react-native-animatable';
//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//Credentials Context
import {CredentialsContext} from '../../components/CredentialsContext'


const SignUpScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [gender,setGender]=useState('')
    const [name,setName]=useState('')
    const [surname,setSurname]=useState('')
    const [mobile,setMobile]=useState('')
    const [dob,setDob]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [male,setMale]=useState(false)
    const [female,setFemale]=useState(false)
    const [other,setOther]=useState(false)
    const [showPassword,setShowPassword]=useState(true)
    const [showConfirmPassword,setShowConfirmPassword]=useState(true)
    const [show,setShow]=useState(false)
    const [date,setDate]=useState(new Date())
    const [isSubmitting,setIsSubmitting]=useState(false)
    const [fn,setFn]=useState(false)
    //Error states
    const [emailError,setEmailError]=useState()
    const [passwordError,setPasswordError]=useState()
    const [nameError,setNameError]=useState()
    const [surnameError,setSurnameError]=useState()
    const [mobileError,setMobileError]=useState()
    const [genderError,setGenderError]=useState()
    const [dobError,setDobError]=useState()
    const [confirmPasswordError,setConfirmPasswordError]=useState()

    const onChange=(event,selectedDate)=>{
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate)
    if(event.type == "set") {          //ok button
    
} else {     
                               //cancel Button
     
    
}
    }

    const showDatePicker=()=>{
        setShow(true);
      
    }
    const genderMale =()=>{
        setMale(!male)
        setFemale(false)
        setOther(false)
        setGenderError()
        if(male){
            setGender('')
        
        }else{
            setGender('Male')  
        }
    }
    const genderFemale =()=>{
        setFemale(!female)
        setMale(false)
        setOther(false)
        setGenderError()
        if(female){
            setGender('')
       
        }else{
            setGender('Female')
        }
    }
    const genderOther =()=>{
        setOther(!other)
        setFemale(false)
        setMale(false)
        setGenderError()
        if(other){
            setGender('')
           
        }else{
            setGender('Other')
        }
    }
    const signUp=()=>{
      
        setIsSubmitting(true)
       const credentials= {
       name:name.trim(),
       surname:surname.trim(),
       email:email.trim(),
       password:password.trim(),
       dateOfBirth:dob,
       gender:gender.trim(),
       mobileNumber:mobile.replace(/\s/g, ''),//removes spaces
       confirmPassword:confirmPassword.trim()
       }
       const url = "https://agile-reef-73771.herokuapp.com/user/signup";
       axios.post(url, credentials).then(response=>{
        const results=response.data
        const {message,status,type,user}=results 
           console.log(user)
           if(status === "FAILED"){
            setIsSubmitting(false)
            if(type === "password"){
             setPasswordError(message)
            }else if(type =="email"){
              setEmailError(message)
            }else if(type === "name"){
                setNameError(message)
            }else if(type === "surname"){
                setSurnameError(message)
            }else if(type === "dob"){
                setDobError(message)
            }else if(type === "gender"){
                setGenderError(message)
            }else if(type === "mobile"){
                setMobileError(message)
            }else if(type === "confirmPassword"){
                setConfirmPasswordError(message)
            }
        }else if(status === "SUCCESS"){
            setIsSubmitting(false)
        alert(message)
        }else{
            alert(message)
        }
       })
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
            {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={onChange}
          
        />
      )}
            <Input
                autofocus
                type="text"
                leftIcon={!name?<FontAwesome5 name="user-alt" size={20}/>:null}
                label="Full Name"
                labelStyle={{color:'#000000'}}
                value={name}
                onChangeText={(text)=>{setName(text),setNameError()}}
                errorMessage={nameError}
            />
             <Input   
                type="text"
                leftIcon={!surname?<FontAwesome5 name="user-alt" size={20}/>:null}
                label="Last Name"
                labelStyle={{color:'#000000'}}
                value={surname}
                onChangeText={(text)=>{setSurname(text),setSurnameError()}}
                errorMessage={surnameError}
            />
             <Input   
                type="email"
                leftIcon={!email?<FontAwesome name="envelope" size={20}/>:null}
                label="Email Address"
                labelStyle={{color:'#000000'}}
                value={email}
                onChangeText={(text)=>{setEmail(text),setEmailError()}}
                errorMessage={emailError}
            />
             <Input  
                type="text"
                leftIcon={!mobile?<FontAwesome name="phone" size={20}/>:null}
                label="Cell Phone Number"
                labelStyle={{color:'#000000'}}
                value={mobile}
                onChangeText={(text)=>{setMobile(text),setMobileError()}}
                errorMessage={mobileError}
            />
            <Input
                type="date"
                leftIcon={!dob?<Foundation name="calendar"  size={24}/>:null}
                label="Date of Birth"
                labelStyle={{color:'#000000'}}
                value={dob?dob.toDateString():''}
                rightIcon={<FontAwesome5 onPress={showDatePicker} style={{right:20}} name="calendar-alt"  size={20}/>}
                onFocus={()=>{showDatePicker,setDobError()}}
                showSoftInputOnFocus={false}
                errorMessage={dobError}
                
            />
             {/* <Input 
                type="text"
                label="Gender"
                labelStyle={{color:'#000000'}}
                value={email}
                onChangeText={(text)=>setEmail(text)}
                rightIcon={<CheckBox title="Male"/>}
            /> */}
            <Text style={{fontWeight:'bold',fontSize:16,left:10,height:30}}>Gender</Text>
            <View style={{flexDirection:'row',borderColor:'grey'}}>
            <CheckBox title="Male" containerStyle={{right:0,backgroundColor:male?'#1492AD':null,width:95}} checked={male} onPress={genderMale} checkedColor='#20F5A1'/>
            <CheckBox title="Female" containerStyle={{backgroundColor:female?'#1492AD':null,width:98}} checked={female} onPress={genderFemale} checkedColor='#20F5A1'/>
            <CheckBox title="Other" containerStyle={{backgroundColor:other?'#1492AD':null,width:95}} checked={other} onPress={genderOther} checkedColor='#20F5A1'/>
          
            </View>
           
           <View style={{height:10,borderBottomWidth:1,borderColor:'grey',width:328,left:10}} />
           <Text style={{color:'red',fontSize:12,left:15,top:5}}>{genderError}</Text>
           <View style={{height:28}}/>
             <Input
                type="password"
                leftIcon={!password?<FontAwesome name="lock" size={20}/>:null}
                label="Password"
                labelStyle={{color:'#000000'}}
                value={password}
                onChangeText={(text)=>{setPassword(text),setPasswordError()}}
                rightIcon={showPassword?<Entypo name="eye-with-line" size={24} onPress={()=>setShowPassword(!showPassword)} />:
              <Entypo name="eye" size={24} onPress={()=>setShowPassword(!showPassword)} />}
              secureTextEntry={showPassword}
              errorMessage={passwordError}
            />
             <Input
            
                type="password"
                leftIcon={!confirmPassword?<FontAwesome name="lock" size={20}/>:null}
                label="Confirm Password"
                labelStyle={{color:'#000000'}}
                value={confirmPassword}
                onChangeText={(text)=>{setConfirmPassword(text),setConfirmPasswordError()}}
                onSubmitEditing={signUp}
                rightIcon={showConfirmPassword?<Entypo name="eye-with-line" size={24} onPress={()=>setShowConfirmPassword(!showConfirmPassword)} />:
              <Entypo name="eye" size={24} onPress={()=>setShowConfirmPassword(!showConfirmPassword)} />}
              secureTextEntry={showConfirmPassword}
              errorMessage={confirmPasswordError}
            />
     <Button 
     buttonStyle={{backgroundColor:'#191970',borderRadius:5}} 
     containerStyle={styles.button} 
     title={isSubmitting?<ActivityIndicator size={23.5} color="#ffffff"/>:"Complete Registration"}
     onPress={signUp}
     disabled={isSubmitting}
     disabledStyle={{backgroundColor:'#191970'}}
     />
     <Text style={{height:40,fontSize:8.5,left:12}}>By completing the registration you accept <Text style={{fontWeight:'bold'}}>terms and conditions</Text> and <Text style={{fontWeight:'bold'}}>privacy policies</Text></Text>
            </ScrollView>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
    
},
button: {
    width:330,
    height:70,
    top:20,
    left:10
},
})
