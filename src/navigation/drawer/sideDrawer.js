import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabs} from '../tabs/BottomTabs';
import Setting from '../../screens/Main/Setting';

const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="App" component={BottomTabs} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

export default SideDrawer;
