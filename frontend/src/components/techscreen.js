import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity,Button, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TechScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const [submittedInquiries, setSubmittedInquiries] = useState([]);


  const handleView = () => {
    // Perform authentication logic here
    // For simplicity, let's assume the login is successful
    navigation.navigate('View'); // Navigate to the home app screen
  };

  const submitInquiry = () => {
    const newInquiry = { description, name, product ,email};
    setSubmittedInquiries([...submittedInquiries, newInquiry]);
    setDescription('');
    setName('');
    setEmail('');
    setProduct('');
    
    // Pass submitted inquiries data as a parameter to the View page
    navigation.navigate('Techview', { submittedInquiries: [...submittedInquiries, newInquiry] });
  };

  const submitInquiry1 = () => {
    // const newInquiry = { description, name, product };
    // setSubmittedInquiries([...submittedInquiries, newInquiry]);
    // setDescription('');
    // setName('');
    // setProduct('');
    alert(`data updated `)
    // Pass submitted inquiries data as a parameter to the View page
  //   navigation.navigate('View', { submittedInquiries: [...submittedInquiries, newInquiry] });
   };

  return (
    <ImageBackground
      source={require('../image/bgs1.jpg')} // Replace with the path to your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Update a Form</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />

<Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.label}>Product</Text>
        <TextInput
          style={styles.input}
          value={product}
          onChangeText={text => setProduct(text)}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={text => setDescription(text)}
        />
        

          <TouchableOpacity style={styles.button} onPress={submitInquiry1}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={submitInquiry}>
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>

        {submittedInquiries.map((inquiry, index) => (
          <View key={index} style={styles.submittedInquiry}>
            
          </View>
          
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  submittedInquiry: {
    marginBottom: 10,
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
  }
});

export default TechScreen;