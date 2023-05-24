import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AuthStack from './src/navigation/AuthStack';
import DrawerStack from './src/navigation/DrawerStack';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);

const App = () => {
    let user = undefined;

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavigationContainer>
                    {!user ? <DrawerStack /> : <AuthStack />}
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}

export default App
