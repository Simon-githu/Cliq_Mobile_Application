import React,{useRef,useState} from 'react'
import { StatusBar } from 'react-native'
import { FlatList,Animated,StyleSheet,View,useWindowDimensions} from 'react-native'
import Paginator from './Paginator'
import StartupButtons from './StartupButtons'
import StartupData from './StartupData'
import StartupItem from './StartupItem'
import {useNavigation} from '@react-navigation/native'


const StartupScreen = () => {
    
    const navigation=useNavigation()
    const [currentIndex,setCurrentIndex]=useState(0)
    const scrollX= useRef(new Animated.Value(0)).current;
    const slideRef =useRef(null)
    const viewableItemsChanged=useRef(({viewableItems})=>{setCurrentIndex(viewableItems[0].index)}).current;
    const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

  
    return (
        <View style={styles.container}> 
        <StatusBar backgroundColor='#191970'/>
        <View style={{flex:3}}>
          <FlatList data={StartupData}  
          renderItem={({item})=> <StartupItem item={item} />}
          horizontal  
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true} 
          bounces={false}
          keyExtractor={(item)=>item.id} 
          onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
          useNativeDriver:false
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref = {slideRef}
          />
          
          </View>

          <Paginator data={StartupData} scrollX={scrollX} currentIndex={currentIndex}/>
          <StartupButtons navigation={navigation} />
          
        </View>
    )
}

export default StartupScreen

const styles = StyleSheet.create({

    container:{
         flex:1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor:'white',
       
    }
})
