import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { createTheme, ThemeProvider } from "@rneui/themed";
//import LivingScreen from './components/living';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './components/RootNavigator';
import TabNavigator from './components/TabNavigator';
//import Disposable from './components/Disposable';


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

