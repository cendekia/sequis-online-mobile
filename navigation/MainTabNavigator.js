import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Chat: {
      screen: LinksScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName, iconSize, marginBottom;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-home`
              : 'md-information-circle';
            iconSize = focused ? 40 : 28;
            marginBottom = focused ? 0 : 0;
            break;
          case 'Chat':
            iconName = Platform.OS === 'ios'
              ? `ios-chatbubbles`
              : 'md-chatbubbles';
            iconSize = focused ? 40 : 28;
            marginBottom = focused ? 0 : 0;
            break;
          case 'Settings':
            iconName = Platform.OS === 'ios'
              ? `ios-switch`
              : 'md-switch';
            iconSize = focused ? 40 : 28;
            marginBottom = focused ? 0 : 0;
        }
        return (
          <Ionicons
            name={iconName}
            size={iconSize}
            style={{ marginBottom: marginBottom }}
            color={focused ? 'white' : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      showLabel: false,
      style: {
        borderTopColor: Colors.tabIconSelected,
        backgroundColor: Colors.tabIconSelected,
      }
    },
  }
);
