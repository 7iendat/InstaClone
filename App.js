// import { SafeAreaView, StyleSheet} from 'react-native';
// import HomeScreen from './screens/HomeScreen';
// import Notification from './screens/Notification';
// import SignedInStack from '../ig-clone/navigation';

import * as React from 'react'
import SignedInStack from './navigation'
import { SafeAreaView, StyleSheet } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
       <SignedInStack/>
    </SafeAreaView>
  )

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
