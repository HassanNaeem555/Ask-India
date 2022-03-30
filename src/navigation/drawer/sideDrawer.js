import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../screens/drawerContent';
import {BottomTabs} from '../tabs/BottomTabs';
import FeedStack from '../stacks/FeedStack';
// import DeliveryInfo from '../Screens/Cart/DeliveryInfo';
// import ViewOrderDetail from '../Screens/Order/ViewOrderDetail';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTransparent: false,
      }}
      drawerStyle={{
        width: '70%',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
      }}
      overlayColor={30}
      sceneContainerStyle={{opacity: 20, shadowOpacity: 70}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      <Drawer.Screen name="FeedStack" component={FeedStack} />
    </Drawer.Navigator>
  );
}
