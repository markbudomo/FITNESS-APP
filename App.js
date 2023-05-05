import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,ImageBackground } from 'react-native';
import { FitnessContext } from './Context';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Add this line3




export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyB9mR6pXmaInSIoc1ZADHpsead5_PG2Ino",
    authDomain: "fitness-app-b25f1.firebaseapp.com",
    projectId: "fitness-app-b25f1",
    storageBucket: "fitness-app-b25f1.appspot.com",
    messagingSenderId: "1075406714589",
    appId: "1:1075406714589:web:1ff9ace3c692f754334d34",
    measurementId: "G-MEZJ60Z5RP"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(); // Initialize the firestore module
  return (
    <FitnessContext>
      <StackNavigator /> 
    </FitnessContext>
  ); 
}

const styles = StyleSheet.create({

});
