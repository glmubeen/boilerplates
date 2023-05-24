import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Other from '../screens/Home/Other';
import Settings from '../screens/Home/Settings';


const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Other" component={Other} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

export default BottomTabStack

const styles = StyleSheet.create({})