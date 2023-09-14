import {  ScrollView, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import { SafeAreaView } from 'react-native'
import Stories from '../components/home/Stories'
import {POSTS} from '../data/posts'
import Post from '../components/home/Post'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar barStyle={'light-content'}/>
      <Header navigation={navigation}/>
      <Stories/>
      <ScrollView>
        {POSTS.map((post, index) => (<Post post={post} key={index}/>))}
       
      </ScrollView>
      <BottomTabs icons = {bottomTabIcons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
  });

export default HomeScreen