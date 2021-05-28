import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Screens/welcome.js'
import {createAppContainer,  createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Donate from './Screens/Donate.js'
import Request from './Screens/Request.js'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
export default function App() {
  return (
    <AppContainer/>
  );
  
}

var AppNavigator = createSwitchNavigator({
  Welcome: Welcome,
  Drawer: AppDrawerNavigator
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const AppContainer = createAppContainer(AppNavigator)