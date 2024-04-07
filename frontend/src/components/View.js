import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ViewScreen = ({ route }) => {
  const { name, email, product, issue } = route.params;
  const [queries, setQueries] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await fetch('http://192.168.43.199:4000/api/query');
      const data = await response.json();
      console.log(data);
      setQueries(data);
    } catch (error) {
      console.error('Error fetching queries:', error.message);
    }
  };

  const saveQueries = async () => {
    try {
      const response = await fetch('http://192.168.43.199:4000/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, product, issue }),
      });
      
      if (response.ok) {
        const newQuery = { name, email, product, issue };
        setQueries([...queries, newQuery]);
        Alert.alert('Success', 'Queries saved successfully', [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]);
      } else {
        throw new Error('Failed to save queries');
      }
    } catch (error) {
      console.error('Error saving queries:', error.message);
      Alert.alert('Error', 'Failed to save queries');
    }
  };

  const deleteQuery = async (_id) => {
    try {
      const response = await fetch(`http://192.168.43.199:4000/api/query/${_id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedQueries = queries.filter(query => query._id !== _id);
        setQueries(updatedQueries);
        Alert.alert('Success', 'Query deleted successfully');
      } else {
        throw new Error('Failed to delete query');
      }
    } catch (error) {
      console.error('Error deleting query:', error.message);
      Alert.alert('Error', 'Failed to delete query');
    }
  };
  
  

  return (
    <ImageBackground
      source={require('../image/bgs1.jpg')} // Replace with the path to your background image
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Name: {name}</Text>
          <Text style={styles.label}>Email: {email}</Text>
          <Text style={styles.label}>Product: {product}</Text>
          <Text style={styles.label}>Issue: {issue}</Text>
          <Button title="Save" onPress={saveQueries} />
          <View>
            {queries.map((query, index) => (
              <View key={index} style={styles.queryContainer}>
                <Text>Name: {query.name}</Text>
                <Text>Email: {query.email}</Text>
                <Text>Product: {query.product}</Text>
                <Text>Issue: {query.issue}</Text>
                <Button title="Delete" onPress={() => deleteQuery(query._id)} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add background color with opacity
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Set resizeMode to 'cover'
  },
  queryContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
});

export default ViewScreen;
