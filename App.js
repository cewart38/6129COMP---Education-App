import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from './loginsignup/homepage';
//import HomePage from './loginsignup/homepage';
//import ButtonBasics from './loginsignup/homepage.js';
import SignIn from './loginsignup/signin.js';
import SignUp from './loginsignup/signup.js';
//import signin from './loginsignup/signin';

export default function App() {
  return (
    <Navigator />
  );
}

const NavGuide = createStackNavigator({

  SignInPage: {screen: SignIn,},
  SignUpPage: {screen: SignUp,},
  HomePage: {screen: Home,},

});

const Navigator = createAppContainer(NavGuide);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
