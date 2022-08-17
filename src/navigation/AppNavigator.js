import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../ui/screens/Home';
import Favorites from '../ui/screens/Favorites';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../ui/screens/Profile/Profile';
import Detail from '../ui/screens/Detail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const StackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="DetailScreen" component={Detail} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#38354B',
          },
          tabBarActiveTintColor: '#E82626',
          tabBarInactiveTintColor: '#8C8B97',
        }}>
        <Tab.Screen
          name="HomeTabScreen"
          component={StackNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="FavoritesTabScreen"
          component={Favorites}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="bookmark-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={Profile}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="account-circle-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
