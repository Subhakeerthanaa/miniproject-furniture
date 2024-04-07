import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();

  const handleExploreButton = () => {
    navigation.navigate('UserRegister'); // Navigate to your main screen (HomePage)
  };

  const handleExplore = () => {
    navigation.navigate('AdminRegister'); // Navigate to your main screen (HomePage)
  };

  const handleExplored = () => {
    navigation.navigate('techreg'); // Navigate to your main screen (HomePage)
  };

  return (
    <ImageBackground
      source={require('../image/bgs1.jpg')}
      style={styles.backgroundImage}
    >
    
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Help Desk Management System</Text>
        <Text style={styles.subtitle}>Find Your Solution Here</Text>
        
        <TouchableOpacity style={styles.exploreButton} onPress={handleExplore}>
          <Text style={styles.exploreButtonText}>ADMIN</Text>
        </TouchableOpacity>

<View style={styles.btn}>
        <TouchableOpacity style={styles.exploreButton} onPress={handleExplored}>
          <Text style={styles.exploreButtonText}>Technician</Text>
        </TouchableOpacity>
</View>

<View style={styles.border}>
        <TouchableOpacity style={styles.exploreButton} onPress={handleExploreButton}>
          <Text style={styles.exploreButtonText}>USER</Text>
        </TouchableOpacity></View>


      </View>
   </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btn:{
   marginTop:10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    marginTop:10
  },
 border:{
       marginTop:10
 },
  subtitle: {
    fontSize: 20,
    color: 'red',
    marginBottom: 40,
    textAlign: 'center',
    paddingTop:15
  },
  exploreButton: {
    backgroundColor: 'lightgreen',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  
  exploreButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default LandingScreen;


