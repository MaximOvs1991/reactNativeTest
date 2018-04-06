import React from 'react';

import { DrawerNavigator } from 'react-navigation';

// screens
import { LoginScreen } from './screens/login-screen';
import { HomeScreen } from './screens/home-screen';
import { StackoverflowScreen } from './screens/stackoverflow-screen';
import { LogoutScreen } from './screens/logout-screen';

const NavigatorSet = DrawerNavigator(
    {
        login: {
            path: '/',
            screen: LoginScreen
        },
        home: {
            path: '/home',
            screen: HomeScreen
        },
        stackoverflow: {
            path: '/stackoverflow',
            screen: StackoverflowScreen
        },
        logout: {
            path: '/logout',
            screen: LogoutScreen
        }
    },
    {
        initialRouteName: 'login',
        drawerPosition: 'left',
        drawerWidth: 200,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

export default NavigatorSet;