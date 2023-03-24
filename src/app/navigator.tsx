import React from 'react';
import Routes from '../constants/constants';
import Home from './screens/Home';
import Users from './screens/Users';
import CreateUser from './screens/CreateUser';
import MyRoutine from './screens/MyRoutine';
import MyRoutineDayDetail from './screens/MyRoutineDayDetail';
import Excercises from './screens/Excercises';
import RoutinesTemplate from './screens/RoutinesTemplate';
import UserDetail from './screens/UserDetail/index';
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
            <AppStack.Screen name={Routes.Users} component={Users} options={defaultStyleHeader}/>
            <AppStack.Screen name={Routes.UserDetail} component={UserDetail} options={defaultStyleHeader}/>
            <AppStack.Screen name={Routes.CreateUser} component={CreateUser} options={defaultStyleHeader}/>
            <AppStack.Screen name={Routes.MyRoutine} component={MyRoutine} options={defaultStyleHeader}/>
            <AppStack.Screen name={Routes.MyRoutineDayDetail} component={MyRoutineDayDetail} options={defaultStyleHeader}/>
            <AppStack.Screen name={Routes.Excercises} component={Excercises} options={defaultStyleHeader}/>
            <AppStack.Screen name={Routes.RoutinesTemplate} component={RoutinesTemplate} options={defaultStyleHeader}/>
        </AppStack.Navigator>
    )
}

export default Navigator;