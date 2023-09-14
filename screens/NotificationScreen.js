import {SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/notification/Header'

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style ={styles.container}>
        <Header navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:40,
        backgroundColor:'black'
    }
})

export default Notification