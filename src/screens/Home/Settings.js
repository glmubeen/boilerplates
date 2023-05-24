import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "blue" }}>
            <Text style={{ color: '#fff', fontSize: 22 }}>Settings</Text>
            <Button title='Go to Home Screen' onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})