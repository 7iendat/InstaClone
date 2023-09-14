import { View, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Text } from 'react-native'
import { AntDesign , Ionicons} from '@expo/vector-icons';



const Header = ({navigation}) => {
    const [display, setDisplay] = useState('none');

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerHeader}>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center'} } onPress={()=> display==='none'? setDisplay('flex') : setDisplay('none')}>
                <Image style={styles.logo} source={require('../../assets/header-logo.png')}/>
                <AntDesign name="down" size={18} color="white" />
            </TouchableOpacity>

            <View style = {styles.iconsContainer}>

                <TouchableOpacity onPress={() => navigation.push('Notification')}>
                    <Image source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}}
                            style={styles.icon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.unread}>
                        <Text style={styles.unreadtext}>2</Text>
                    </View>
                    <Image source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'}}
                            style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
        
        <View style={{backgroundColor:'#404040', width: 180, borderRadius: 10, position:'absolute', top: 80, zIndex:999, marginLeft:12, display:display}}>
            <TouchableOpacity>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', height:40, marginHorizontal: 6}}>
                    <Text style = {{color:'white'}}>Đang theo dõi</Text>
                    <Ionicons name="people-outline" size={24} color="white" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', height:40, marginHorizontal: 6}}>
                    <Text style={{color:'white'}}>Yêu thích</Text>
                    <AntDesign name="staro" size={24} color="white" />
                </View>
            </TouchableOpacity>

        </View>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 12,
        
    },

    containerHeader:{
        // flex:1,
        
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        
    },

    logo: {
        width:100,
        height:50,
        resizeMode:'contain',
        marginRight: 6,
        
    },
    iconsContainer:{
        flexDirection:'row'
    },
    icon:{
        width:28,
        height:28,
        resizeMode:'contain',
        marginLeft:8
    },

    unread:{
        width:24,
        height:18,
        backgroundColor:'#FF3250',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        right:-6,
        top: -4,
        zIndex:100
    },
    unreadtext:{
        color:'white'
    }

})

export default Header