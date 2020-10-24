import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import Home from './pages/Home';
import UpdateUser from './pages/UpdateUser';
import Signup from './pages/Signup';
import Login from './pages/Login';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
        style: { backgroundColor: '#31126B' },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'home' : 'ios-home-outline'}
              color={'#fff'}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'person-add' : 'person-add-outline'}
              color={'#fff'}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  });

  return (
    <>
      <StatusBar backgroundColor={'#31126B'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UpdateUser"
            component={UpdateUser}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
