import React from "react";
import { TabNavigator } from "react-navigation";

import Quavo from '../Views/Quavo';
import Offset from '../Views/Offset';
import Takeoff from '../Views/Takeoff';

export const Tab = TabNavigator({
  Quavo: {
    screen: Quavo,
  },
  Offset: {
    screen: Offset,
  },
  Takeoff: {
    screen: Takeoff,
  },

}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "blue",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});
