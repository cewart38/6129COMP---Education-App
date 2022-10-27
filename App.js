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
import AdminSignIn from './loginsignup/adminsignin.js';
//import signin from './loginsignup/signin';
<<<<<<< HEAD
import AdminDashboard from './loginsignup/admindashboard.js';
=======
import Quiz from './src/screens/Quiz.js';

>>>>>>> 1cedc7cffb48f302e339055fcf50022d97282a42
export default function App() {
  return (
    <Navigator />
  );
}

const NavGuide = createStackNavigator({

  SignInPage: {screen: SignIn,},
  SignUpPage: {screen: SignUp,},
  HomePage: {screen: Home,},
<<<<<<< HEAD
  AdminSignInPage: {screen: AdminSignIn,},
  AdminDashboardPage: {screen: AdminDashboard,},
=======
  Quiz: {screen: Quiz,},
>>>>>>> 1cedc7cffb48f302e339055fcf50022d97282a42

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
