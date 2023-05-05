import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image, Alert } from 'react-native';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async () => {
      try {
        // login user
        const auth = firebase.auth();
        const userCredential = await auth.signInWithEmailAndPassword(
          email,
          password
        );
         // redirect user to home screen
    navigation.navigate('Home');

      } catch (error) {
        Alert.alert("Error", error.message);
        console.error(error);
      }
    };
  

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.still}>Dont Have An Account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <View style={styles.signupButton}>
           
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353740',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    marginTop: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 15,
  },
  loginButton: {
    marginTop: 25,
    backgroundColor: '#ef4146',
    borderRadius: 15,
    padding: 10,
    width: 150,
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  still:{
    textAlign: 'center',
    color:'#FFFFFF',
    marginTop: 50,
    marginBottom: -20
  },
  signupButton: {
    marginTop: 19,
    //backgroundColor: '#ef4146',
    borderRadius: 15,
    padding: 15,
    width: 100,
  },
  signupButtonText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  logo: {
    marginBottom: 30,
    width: 400, // Specify a width for the logo
    height: 400, // Specify a height for the logo
    resizeMode: 'contain', // Resize the logo within its container
    marginBottom: -40
  },
});

export default LoginScreen;
