import React from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'

const StartupButtons = ({navigation}) => {

    return (
        <View style={styles.container}>
        <Button buttonStyle={{backgroundColor:'#191970',borderRadius:5}} containerStyle={styles.buttons} title="SIGN UP" onPress={()=>navigation.navigate('SignUp')}/>
        <Button buttonStyle={{backgroundColor:'#191970',borderRadius:5}} containerStyle={styles.buttons} title="SIGN IN"  onPress={()=>navigation.navigate('SignIn')}/>
        </View>
    )
}

export default StartupButtons

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        bottom:50
    },
    buttons:{
        width:148,
        marginHorizontal:10,
        
    }
})
