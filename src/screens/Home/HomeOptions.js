import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity,FlatList } from 'react-native'
import { StyleSheet, Text, View,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import HomeData from './HomeData'
import * as Animatable from 'react-native-animatable';

const HomeOptions = () => {
    const navigation = useNavigation()
    return (
     
          <FlatList
          
          showsVerticalScrollIndicator={false}
           data={HomeData}
           keyExtractor={(item) => item.id}
           numColumns={3}
           renderItem={({item})=>(
         <Animatable.View
         animation="bounceIn"
               easing="ease-in"
         >
               <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate(item.screen)}>
              
                   <View>
                      <Image
                          source={item.image}
                      />
                    <Text style={styles.txt}>{item.title}</Text>
                   </View>
                  
               </TouchableOpacity>
               
               </Animatable.View>
           )}
       />
    

    )
}

export default HomeOptions

const styles = StyleSheet.create({

    container:{
        height:83,
        margin:15,
        width: 85,
        backgroundColor:'#191970',
        alignItems:'center',
       justifyContent:'center',
       marginBottom:60,
       borderRadius:15
    },
    txt:{
        position:'absolute',
        top:80,
        alignSelf:'center',
       
    }
})
