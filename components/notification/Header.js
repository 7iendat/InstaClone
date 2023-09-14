import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Header = ({navigation}) => {
  return (
    
        <View style ={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=> navigation.push('Home')}>
                <AntDesign name="arrowleft" size={30} color="white"  style ={{marginRight: 23}}/>

            </TouchableOpacity>
            <Text style={{color:'white', fontSize:20, fontWeight:600,}}>Thông báo</Text>
        </View>

  )
}

export default Header