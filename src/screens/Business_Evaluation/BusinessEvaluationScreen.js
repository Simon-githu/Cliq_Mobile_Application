import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BusinessEvaluationScreen = () => {
    return (
        <View style={styles.container}>
        <View style={{bottom:310}}>
    <Text style={styles.title}>Business Evaluation</Text>
     <View style={{ height: 3, width: 23, backgroundColor: "#191970",alignSelf: "center"}}/>
     </View>
     </View>
    )
}

export default BusinessEvaluationScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      
      
    },
    title: {
        fontWeight: "500",
        fontSize: 18,
        color: "#000000",
        textAlign: "center",
      },
})
