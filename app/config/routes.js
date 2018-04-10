import { DrawerNavigator } from 'react-navigation';

// screens
import { StackoverflowScreen } from "../screens/stackoverflow-screen";
import { LoginScreen } from "../screens/login-screen";
import { HomeScreen } from "../screens/home-screen";
import { LogoutScreen } from "../screens/logout-screen";

export const Drawer = DrawerNavigator(
    {
        login: {
            screen: LoginScreen
        },
        home: {
            screen: HomeScreen
        },
        stackoverflow: {
            screen: StackoverflowScreen
        },
        logout: {
            screen: LogoutScreen
        }
    },
    {
        drawerBackgroundColor: '#b2bec3',
        initialRouteName: 'login',
        drawerPosition: 'left',
        drawerWidth: 200
    }
);