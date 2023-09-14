import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users.js'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'



const Stories = () => {
    const navigation = useNavigation()
  return (
    
      <View style ={{marginBottom:12, position:'relative', zIndex:-1}}>
     
          <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
          
            {USERS.map((story, index) => (
                <Pressable onPress={() => navigation.push("Status", {
                    name: story.user,
                    imageUri : story.image
                })} key={index} style={{alignItems: 'center', paddingLeft:12}}>
                    <Image source={{uri: story.image}} style ={styles.story} />
                    <Text style={{color: 'white'}}>{story.user.length > 11 ? story.user.slice(0,10).toLocaleLowerCase() + '...' : story.user.toLowerCase()}</Text>
                </Pressable>
            ))}
          </ScrollView>

      </View>
  
        

  
  )
}

const styles = StyleSheet.create({
    story:{
        width: 70,
        height:70,
        borderColor: '#ff8501',
        borderRadius: 50,
        borderWidth:2,
        
    }
})


export default Stories