// import {
//   CompositeScreenProps,
//   NavigatorScreenParams,
//   RouteProp,
// } from '@react-navigation/native';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens} from '../constants/appRoutes';
import Home from '../screens/Home';
import {MaterialIcon} from '../components/Icon/Icon';
import useThemeStyles from './styles';
import {useAppTheme} from '../hooks/useAppTheme/index';
import Profile from '../screens/Profile';

export type TabStackParamList = {
  [Screens.Home]: undefined;
  [Screens.Profile]: undefined;
};
const TabStack = createBottomTabNavigator<TabStackParamList>();
const BottomTab = () => {
  const styles = useThemeStyles();
  const theme = useAppTheme();

  return (
    <TabStack.Navigator
      screenOptions={() => ({
        tabBarLabel: '',
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.surface,
        headerShown: false,
      })}>
      <TabStack.Screen
        component={Home}
        name={Screens.Home}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              size="extraLarge"
              name={focused ? 'home' : 'pin'}
              color="#fff"
            />
          ),
        }}
      />
      <TabStack.Screen
        component={Profile}
        name={Screens.Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              size="extraLarge"
              name={focused ? 'plus' : 'map'}
              color="#fff"
            />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default BottomTab;
