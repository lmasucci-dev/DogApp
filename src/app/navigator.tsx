import React from 'react';
import Routes from '../constants/constants';
import Home from './screens/Home';
import BreedsDetails from './screens/BreedsDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name={Routes.Home} component={Home} />
            <AppStack.Screen name={Routes.BreedsDetails} component={BreedsDetails} />
        </AppStack.Navigator>
    )
}

export default Navigator;