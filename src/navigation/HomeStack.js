import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabStack from './BottomTabStack';
import Other from '../screens/Home/Other';
import Settings from '../screens/Home/Settings';
import Cart from '../screens/Home/Cart';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Other" component={Other} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})