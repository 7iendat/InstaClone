import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { videoData } from '../../data/videosDb';
import Reel from './Reel';

const Reels = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleChangeIndex = ({index}) => {
        setCurrentIndex(index)
    }
  return (
    <SwiperFlatList
    data={videoData}
    vertical
    onChangeIndex={handleChangeIndex}
    renderItem={({item, index})=> (<Reel item={item} index = {index} currentIndex ={currentIndex}/>)}
    keyExtractor={(item, index) => index}
    />
  )
}

export default Reels

const styles = StyleSheet.create({})