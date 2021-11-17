import styled from 'styled-components'
import {View,Image} from 'react-native'
import Constants from 'expo-constants'
import {Input,Button,CheckBox,TouchableOpacity,KeyboardAvoidingView } from 'react-native-elements'

const StatusBarHeight = Constants.statusBarHeight;

//colors we will use thorughout the application 
export const Colors={
    primary:"#ffffff",
    darkCyan:"#1492AD"
}

const {primary,darkCyan} = Colors;

export const StyledContainer=styled.View`
flex:1;
padding:25px;
padding-top:${StatusBarHeight + 10}px;
background-color:${primary}
`;

export const InnerContainer=styled.View`
flex:1;
width:100%;
align-items:center;
`;

export const PageLogo = styled.Image`
width:250px;
height:200px;
`;
export const StyledFormArea = styled.View`
width:90%;
`;
export const StyledInput = styled(Input)`
padding-left:55px;
padding-right:55px;
padding:15px;
font-size:16px;
margin-bottom:10px
`;
