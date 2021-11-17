import React from 'react'
import { StyleSheet,Animated, useWindowDimensions, View } from 'react-native'

const Paginator = ({data,scrollX,currentIndex}) => {
    const {width} =useWindowDimensions()
    
    return (
        <View style={styles.container}>
            {data.map((_,i)=>{
                const inputRange =[(i-1)*width,i*width,(i+1)*width];
             
                const dotWidth =scrollX.interpolate({
                    inputRange,
                    outputRange:[5,25,5],
                    extrapolate:'clamp',
                })
                const dotWidthChange =scrollX.interpolate({
                    inputRange,
                    outputRange:[25,25,25],
                    extrapolate:'clamp',
                })
               
                return <Animated.View style={[styles.dot,{width:dotWidth,backgroundColor:i===currentIndex?'#191970':'white'}]} key={i.toString()}/>;
            })}
        </View>
    )
}

export default Paginator

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        bottom:120
    },
    dot:{
        height:5,
        borderRadius:10,
        borderColor:'#191970',
        marginHorizontal:8, 
        borderWidth:1,
      
       
    }
})
