import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MyTab from './MyTab';
// import IconHome from '../../../public/img/icons/navbar-icons/fi-rr-home.svg';
import {View, Text, Image} from 'react-native';
import Home from '../Screen/Home/Home';

import HomeIconActive from '../../../public/img/icons/navbar-icons/fi-rr-home-active.svg';
import HomeIconInactive from '../../../public/img/icons/navbar-icons/fi-rr-home-inactive.svg';
import BookmarkIconActive from '../../../public/img/icons/navbar-icons/fi-rr-bookmark-active.svg';
import BookmarkIconInactive from '../../../public/img/icons/navbar-icons/fi-rr-bookmark-inactive.svg';
import BellIconActive from '../../../public/img/icons/navbar-icons/fi-rr-bell-active.svg';
import BellIconInactive from '../../../public/img/icons/navbar-icons/fi-rr-bell-inactive.svg';
import UserIconActive from '../../../public/img/icons/navbar-icons/fi-rr-user-active.svg';
import UserIconInactive from '../../../public/img/icons/navbar-icons/fi-rr-user-inactive.svg';

function BookmarkScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          paddingTop: 30,
          paddingBottom: 35,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? <HomeIconActive /> : <HomeIconInactive />;
          } else if (route.name === 'Bookmark') {
            iconName = focused ? (
              <BookmarkIconActive />
            ) : (
              <BookmarkIconInactive />
            );
          } else if (route.name === 'Bell') {
            iconName = focused ? <BellIconActive /> : <BellIconInactive />;
          } else if (route.name === 'Profile') {
            iconName = focused ? <UserIconActive /> : <UserIconInactive />;
          }

          // You can return any component that you like here!
          return iconName;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      <Tab.Screen name="Bell" component={BookmarkScreen} />
      <Tab.Screen name="Profile" component={BookmarkScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
