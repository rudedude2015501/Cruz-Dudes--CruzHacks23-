import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { createTheme, ThemeProvider } from "@rneui/themed";
import Component from "./components/living";
import LivingScreen from './components/living';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <ScrollView>
      <NavigationContainer>
        <LivingScreen/>
      </NavigationContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center"
  }
})
