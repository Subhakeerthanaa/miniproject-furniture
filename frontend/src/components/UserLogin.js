
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import pattern from '../front-end/assets/L2.jpg';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.43.199:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        console.log('Login successful');
        navigation.navigate('Create');
      } else if (response.status === 401) {
        alert('Incorrect email or password');
        Alert.alert('Authentication Failed', 'Incorrect email or password');
      } else {
        console.log('Login error');
        Alert.alert('Authentication Failed', 'An error occurred during login');
      }
    } catch (error) {
      console.error('Error logging in', error);
      Alert.alert('Error', 'An error occurred while attempting to log in');
    }
  };

  return (
    <ImageBackground
      source={require('../image/bgs1.jpg')} // Replace with the path to your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.loginForm}>
          <Text style={styles.header}>Login</Text>
          <Text style={styles.dfn}>Enter the Email:</Text>
          <TextInput
           
            style={styles.input}
            placeholder="Email"
            onChangeText={handleEmailChange}
            value={email}
            keyboardType="email-address"
          />
          <Text style={styles.dfn1}>Enter the Password :</Text>
          <TextInput
           
            style={styles.input}
            placeholder="Password"
            onChangeText={handlePasswordChange}
            value={password}
            secureTextEntry
         />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign:'center',
    color: 'green', // Changed header color
    fontWeight: 'bold', // Added fontWeight for a bolder look
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // Updated resizeMode to 'cover'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  dfn: {
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 2,
  },
  dfn1: {
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 2,
  },
  loginForm: {
    padding: 30,
    width: '80%',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 20,
    elevation: 3, // Added elevation for a slight shadow effect (Android)
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold', // Added fontWeight for a bolder look
  },
});

export default UserLogin;