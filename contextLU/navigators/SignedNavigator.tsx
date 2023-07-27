import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import Feed from '../Screens/Feed';
import Search from '../Screens/Search';
import Notifications from '../Screens/Notifications';
import Settings from '../Screens/Settings';
import {useAppCtx} from '../hooks/context';

export type SignedTabNavigator = {
  feed: {username: string};
  search: undefined;
  notifications: undefined;
  settings: undefined;
};

const Tab = createBottomTabNavigator<SignedTabNavigator>();

const SignedNavigator = () => {
  const {user} = useAppCtx();
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="feed"
        component={Feed}
        initialParams={{username: user?.username}}
      />
      <Tab.Screen name="search" component={Search} />
      <Tab.Screen name="notifications" component={Notifications} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default SignedNavigator;
