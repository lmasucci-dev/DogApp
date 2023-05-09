import React from 'react';
import Routes from '../constants/constants';
import Home from './screens/Home';
import Orders from './screens/Orders';
import AddOrder from './screens/Orders/screens/AddOrder';
import Products from './screens/Products';
import Reports from './screens/Reports';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesParamList } from '../constants/routesParamList';

const AppStack = createNativeStackNavigator<RoutesParamList>();

const defaultStyleHeader =  {
    headerStyle: {
        backgroundColor: '#1C1C1E',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22
    }}

const Navigator = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name={Routes.Home} component={Home} options={defaultStyleHeader} />
            <AppStack.Screen name={Routes.Orders} component={Orders} options={defaultStyleHeader}/>
            <AppStack.Screen name={Routes.AddOrder} component={AddOrder} options={defaultStyleHeader}/>
            <AppStack.Screen name={Routes.Products} component={Products} options={defaultStyleHeader}/>
            <AppStack.Screen name={Routes.Reports} component={Reports} options={defaultStyleHeader}/>
        </AppStack.Navigator>
    )
}

export default Navigator;