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

const Navigator = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name={Routes.Home} component={Home} options={{headerShown: false}}/>
            <AppStack.Screen name={Routes.Users} component={Users} />
            <AppStack.Screen name={Routes.UserDetail} component={UserDetail} />
            <AppStack.Screen name={Routes.CreateUser} component={CreateUser} />
            <AppStack.Screen name={Routes.MyRoutine} component={MyRoutine} />
            <AppStack.Screen name={Routes.MyRoutineDayDetail} component={MyRoutineDayDetail} />
            <AppStack.Screen name={Routes.Excercises} component={Excercises} />
            <AppStack.Screen name={Routes.RoutinesTemplate} component={RoutinesTemplate} />
        </AppStack.Navigator>
    )
}

export default Navigator;