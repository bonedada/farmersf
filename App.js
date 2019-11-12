/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Welcome from './Component/Welcome';
import Home from './Component/Home';
import CropCheck from './Component/CropCheck';

const RootStack = createStackNavigator(
  {
    Welcome: Welcome,
    Home: Home,
    Crop: CropCheck,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

const App = () => {
  return <AppContainer />;
};
export default App;
