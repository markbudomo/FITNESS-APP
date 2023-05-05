import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet , Image, TouchableOpacity, Text, Alert} from 'react-native';
import { auth } from 'firebase/compat/auth'; // Import the Firebase authentication module

import { getFirestore, doc, setDoc } from "firebase/firestore";

import firebase from "firebase/compat/app";

import "firebase/firestore";

const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSignup = async () => {
    try {
        const auth = firebase.auth();

        const db = getFirestore();
        // const user = await auth.createUserWithEmailAndPassword(email, password);
        const user = await auth.createUserWithEmailAndPassword(email, password);

       // insert data into firestore
       const docRef = await setDoc(doc(db, "users", user.user.uid), {
        firstName: fullName,
        email: email,
        age: age,
	    address: address,
        contactNumber: contactNumber,
      });

      console.log(user); // handle response data
      Alert.alert("Success", "Your account has been created successfully.");
      navigation.goBack();
  } catch (error) {
      console.error(error);
  }
  };

  return (
    <View style={styles.container}>
         <Image source={require('../assets/icon.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="white"
        value={fullName}
        onChangeText={setFullName}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="white"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="white"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        placeholderTextColor="white"
        value={contactNumber}
        onChangeText={setContactNumber}
      />
      <TouchableOpacity onPress={handleSignup}>
        <View style={styles.SignupButton}>
          <Text style={styles.SignupButtonText}>SIGN UP</Text>
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 4,
    paddingLeft: 10,
    borderRadius: 15,
    color: 'white'
  },
  logo: {
    marginBottom: 30,
    width: 310, 
    height: 300, 
    resizeMode: 'contain', 
    marginBottom: -40
  },
  SignupButton: {
    marginTop: 20,
    backgroundColor: '#ef4146',
    borderRadius: 15,
    padding: 10,
    width: 100,
  },
  SignupButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
});

export default SignupScreen;
