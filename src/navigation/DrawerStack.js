import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import HomeStack from '../navigation/HomeStack';
import Other from '../screens/Home/Other';
import Settings from '../screens/Home/Settings';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator
            screenOptions={{
                // headerShown: false,
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Cart")}
                        style={{ marginRight: 16 }}>
                        <Text style={{ color: "#fff" }}>Cart</Text>
                    </TouchableOpacity>
                ),
                headerStyle: {
                    backgroundColor: '#f4511e', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
            }}>
            <Drawer.Screen
                name="HomeStack"
                options={{
                    drawerLabel: 'Home Screen',
                    title: 'Home Screen',
                    drawerType: "slide"
                }}
                component={HomeStack}
            />
            <Drawer.Screen
                name="OtherScreenStack"
                options={{
                    drawerLabel: 'Other Screen',
                    title: 'Other Screen',
                }}
                component={Other}
            />
            <Drawer.Screen
                name="SettingScreenStack"
                options={{
                    drawerLabel: 'Setting Screen',
                    title: 'Setting Screen',
                }}
                component={Settings}
            />
        </Drawer.Navigator>
    )
}

export default DrawerStack

const styles = StyleSheet.create({})