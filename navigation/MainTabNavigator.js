import React from 'react';
import { Platform } from 'react-native';
import { Foundation, MaterialIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import BarScreen from '../screens/BarScreen';
import PieScreen from '../screens/PieScreen';
import PackScreen from '../screens/PackScreen'; 

const ICONS = {
  Bar: 'graph-bar',
  Pie: 'graph-pie',
  Pack: 'bubble-chart',
};

export default TabNavigator(
  {
    Bar: {
      screen: BarScreen,
    },
    Pie: {
      screen: PieScreen,
    },
    // Pack: {
    //   screen: PackScreen,
    // },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        const the = { component: routeName === 'Pack' ? MaterialIcons : Foundation }
        return (
          <the.component
            name={ICONS[routeName]}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
