import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Create = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');
  const [issue, setIssue] = useState('');
  //const [date, setDate] = useState('');
 
  const handleSubmit = () => {
    // Handle form submission logic here
    if (!name || !email || !product || !issue ) {
      Alert.alert('All fields are required');
      return;
    }
  
    navigation.navigate('View', {
      name,
      email,
      product,
      issue,
      
    });
  };
  const handleSubmit2 = () => {
    // const newInquiry = { description, name, product };
    // setSubmittedInquiries([...submittedInquiries, newInquiry]);
    // setDescription('');
    // setName('');
    // setProduct('');
    alert(`data created successfully `)
    // Pass submitted inquiries data as a parameter to the View page
  //   navigation.navigate('View', { submittedInquiries: [...submittedInquiries, newInquiry] });
   };
  

  return (
    <ImageBackground
      source={require('../image/bgs1.jpg')} // Replace with the path to your background image
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        
      />
      
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your Email"
      />

      <Text style={styles.label}>Product</Text>
      <TextInput
        style={styles.input}
        value={product}
        onChangeText={setProduct}
        placeholder="Enter Product Name"
      />

      <Text style={styles.label}>Issue</Text>
      <TextInput
        style={styles.input}
        value={issue}
        onChangeText={setIssue}
        placeholder="Enter the issue"
      />

      {/* <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Enter the date"
      /> */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit2}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>view</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // Updated resizeMode to 'cover'
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Create;


