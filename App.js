import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './src/navigation/MainStack'
import AuthStack from './src/navigation/AuthStack'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
    let user = null;

    return (
        <Provider store={store}>
            <NavigationContainer>
                {!user ? <MainStack /> : <AuthStack />}
            </NavigationContainer>
        </Provider>
    )
}

export default App
