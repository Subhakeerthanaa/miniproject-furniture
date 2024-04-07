import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert, TouchableOpacity } from 'react-native';

function TechReg({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://192.168.43.199:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });
      if (response.status === 201) {
        console.log('User registered successfully');
        Alert.alert('SignUp Success');
        navigation.navigate('techlogin');
      } else {
        console.error('Error registering user. Status code: ' + response.status);
      }
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <ImageBackground
    source={require('../image/bgs1.jpg')} // Replace with the path to your background image
    style={styles.backgroundImage}
  >
      <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <Text style={styles.dfn}>Enter the Name :</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="white"
        placeholder="Username"
        onChangeText={handleUsernameChange}
            value={username}
            required
      />
      <Text style={styles.dfn}>Enter the Email :</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        placeholderTextColor="white"
        placeholder="Email"
            onChangeText={handleEmailChange}
          required
      />
      <Text style={styles.dfn}>Enter the Password :</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="white"
        value={password}
        placeholder="Password"
            onChangeText={handlePasswordChange}
            secureTextEntry  
            required
      />

<Text style={styles.dfn}>Enter the confirm Password:</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="white"
        placeholder="Confirm Password"
            onChangeText={handleConfirmPasswordChange}
            value={confirmPassword}
            
            secureTextEntry 
            required 
      />

<TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
            <Text style={styles.buttonText1}>Already have a Account!Click here to Login</Text>
          </TouchableOpacity>

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
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 20,
    color: "green"
  },
  dfn: {
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 18,
    paddingRight: 90,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  loginText: {
    paddingTop: 40,
    color: "blue",
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
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 20,
    elevation: 3,
  },
  button1:{
     color:"blue",
     paddingTop:20,
     fontWeight:"bold"
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonText1: {
    color: 'blue',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'normal',
  },

});

export default TechReg;
