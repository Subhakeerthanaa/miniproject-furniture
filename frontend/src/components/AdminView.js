import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';

const AdminView = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await fetch('http://192.168.43.199:4000/api/query');
      const data = await response.json();
      setQueries(data);
    } catch (error) {
      console.error('Error fetching queries:', error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../image/bgs1.jpg')} // Replace with the path to your background image
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Stored Queries</Text>
          {queries.map((query, index) => (
            <View key={index} style={styles.queryContainer}>
              <Text>Name: {query.name}</Text>
              <Text>Email: {query.email}</Text>
              <Text>Product: {query.product}</Text>
              <Text>Issue: {query.issue}</Text>
              {/* <Text>Submitted Inquiries: {query.submittedInquiries}</Text> */}
            </View>
          ))}
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
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Set resizeMode to 'cover'
  },
  queryContainer: {
    marginBottom: 20,
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
  },
});

export default AdminView;
