
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationScreen from './screens/NotificationScreen';
import HomeScreen from './screens/HomeScreen';
import ExtendScreen from './screens/ExtendScreen';
import StatusScreen from './screens/StatusScreen';
import SearchScreen from './screens/SearchScreen';
import ReelsScreen from './screens/ReelsScreen';

const Stack = createNativeStackNavigator();

const screenOptions  = {
    headerShown: false,
}

const SignedInStack = () => (

    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            {/* <Stack.Screen name="Extend" component={ExtendScreen}/> */}
            <Stack.Screen name = "Status" component={StatusScreen}/>
            <Stack.Screen name = "Search" component={SearchScreen}/>
            <Stack.Screen name = "Reels" component={ReelsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack